// ─── delivery-core.js ────────────────────────────────────────────────────────
// Gestión de datos TACAM: localStorage ↔ servidor (storage-sync.php)
//
// ORDEN DE ARRANQUE
//  1. seedData()        → garantiza estructura mínima en localStorage
//  2. hydrateFromServer() → trae datos del servidor y los FUSIONA (no sobreescribe)
//  3. window dispara 'tacam-server-hydrated' → app.js llama renderAll()
//
// REGLAS DE FUSIÓN
//  - Se usa updatedAt (ISO) por registro; el más reciente gana.
//  - Si el servidor tiene más registros que localStorage, se añaden.
//  - Los datos demo sólo se insertan si el servidor también está vacío.
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEYS = {
  clients:  'tacam_clients',
  bookings: 'tacam_bookings',
  lawyers:  'tacam_lawyers',
  profiles: 'tacam_profiles',
  session:  'tacam_session'
};

const SERVER_SYNC_ENDPOINT = 'storage-sync.php';

const LEGACY_LAWYER_NAMES = new Set([
  'Daniela Sierra', 'Natalie Gómez', 'Camila Vásquez', 'Carolina Contreras'
]);

const OFFICIAL_LAWYERS = [
  { name: 'KATHERINE SERRANO MARREY',          rut: '16.592.789-3',  specialty: 'Penal - policía local',              email: 'kserrano@tacam.cl',  phone: '', photo: 'assets/logo-color.svg' },
  { name: 'CONSTANZA ROCÍO CLIMENT DEL RÍO',   rut: '16.380.148-5',  specialty: 'Familia',                            email: 'ccliment@tacam.cl',  phone: '', photo: 'assets/logo-color.svg' },
  { name: 'VALENTINA BELEN REICHERT GODOY',    rut: '20.135.049-2',  specialty: 'Penal - Policía local',              email: 'vreichert@tacam.cl', phone: '', photo: 'assets/logo-color.svg' },
  { name: 'SARA BERNARDA TAPIA GONZÁLEZ',      rut: '12.836.725-K',  specialty: 'Penal - Policía local - Familia',    email: 'stapia@tacam.cl',    phone: '', photo: 'assets/logo-color.svg' },
  { name: 'DIANDRA ARACENA MORA',              rut: '15.981.484-K',  specialty: 'Penal',                              email: 'daracena@tacam.cl',  phone: '', photo: 'assets/logo-color.svg' }
];

// ─── Utilidades de almacenamiento local ──────────────────────────────────────

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Guarda en localStorage y encola sincronización con el servidor.
 * NO llames a queueServerSync directamente; usa siempre saveJson.
 */
function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  queueServerSync();
}

/**
 * Escribe en localStorage SIN disparar sincronización con servidor.
 * Úsalo sólo durante la hidratación para evitar eco (leer servidor → escribir servidor).
 */
function saveJsonLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ─── Indicador de sincronización ─────────────────────────────────────────────

function dispatchSyncStatus(status, message = '') {
  window.dispatchEvent(new CustomEvent('tacam-sync-status', {
    detail: { status, message, at: new Date().toISOString() }
  }));
}

// ─── Cola de sincronización con reintentos ────────────────────────────────────

let syncTimer  = null;
let syncRetry  = 0;
const SYNC_DELAY_MS   = 800;   // debounce: espera 800 ms tras el último cambio
const SYNC_MAX_RETRY  = 3;
const SYNC_RETRY_MS   = 5000;  // reintento cada 5 s si falla

function queueServerSync() {
  if (typeof fetch !== 'function') return;
  if (syncTimer) clearTimeout(syncTimer);
  dispatchSyncStatus('pending', 'Pendiente de sincronización');
  syncTimer = setTimeout(() => {
    syncTimer = null;
    doServerSync();
  }, SYNC_DELAY_MS);
}

function doServerSync(attempt = 1) {
  dispatchSyncStatus('syncing', 'Sincronizando con servidor…');

  const payload = {
    clients:  loadJson(STORAGE_KEYS.clients,  []),
    bookings: loadJson(STORAGE_KEYS.bookings, []),
    lawyers:  loadJson(STORAGE_KEYS.lawyers,  []),
    profiles: loadJson(STORAGE_KEYS.profiles, [])
  };

  fetch(SERVER_SYNC_ENDPOINT, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        syncRetry = 0;
        dispatchSyncStatus('ok', 'Sincronizado con servidor');
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    })
    .catch(err => {
      const nextAttempt = attempt + 1;
      if (nextAttempt <= SYNC_MAX_RETRY) {
        dispatchSyncStatus('error', `Error al sincronizar – reintentando (${attempt}/${SYNC_MAX_RETRY})…`);
        setTimeout(() => doServerSync(nextAttempt), SYNC_RETRY_MS);
      } else {
        dispatchSyncStatus('error', 'Sin conexión con servidor (datos guardados localmente)');
      }
    });
}

// ─── Fusión inteligente de arrays por ID ─────────────────────────────────────

/**
 * Fusiona dos arrays de objetos identificados por `id`.
 * La versión con updatedAt más reciente prevalece.
 * Los registros que sólo existen en uno de los dos lados se conservan.
 */
function mergeById(local = [], remote = []) {
  const map = new Map();

  local.forEach(item => {
    if (item && item.id) map.set(item.id, item);
  });

  remote.forEach(item => {
    if (!item || !item.id) return;
    const existing = map.get(item.id);
    if (!existing) {
      map.set(item.id, item);
      return;
    }
    // El más reciente gana; si no hay fecha, el remoto tiene preferencia
    const localTs  = existing.updatedAt  || existing.createdAt  || '';
    const remoteTs = item.updatedAt      || item.createdAt      || '';
    if (remoteTs >= localTs) {
      map.set(item.id, item);
    }
  });

  return [...map.values()];
}

// ─── Hidratación desde servidor ───────────────────────────────────────────────

/**
 * Descarga datos del servidor y los fusiona con localStorage.
 * NO sobreescribe el localStorage si el servidor devuelve arrays vacíos.
 * Emite 'tacam-server-hydrated' cuando termina (con o sin cambios).
 */
function hydrateFromServer() {
  if (typeof fetch !== 'function') {
    window.dispatchEvent(new Event('tacam-server-hydrated'));
    return;
  }

  dispatchSyncStatus('syncing', 'Cargando datos del servidor…');

  fetch(SERVER_SYNC_ENDPOINT, { method: 'GET' })
    .then(response => response.ok ? response.json() : null)
    .then(data => {
      const payload = data?.data;
      let changed = false;

      if (payload && typeof payload === 'object') {
        const keys = ['clients', 'bookings', 'lawyers', 'profiles'];
        keys.forEach(key => {
          const remote = Array.isArray(payload[key]) ? payload[key] : [];
          if (!remote.length) return; // nada remoto → no tocar local

          const local   = loadJson(STORAGE_KEYS[key], []);
          const merged  = mergeById(local, remote);

          // Sólo escribir si realmente cambia algo
          if (JSON.stringify(merged) !== JSON.stringify(local)) {
            saveJsonLocal(STORAGE_KEYS[key], merged);
            changed = true;
          }
        });
      }

      dispatchSyncStatus('ok', 'Datos cargados desde servidor');
      window.dispatchEvent(new CustomEvent('tacam-server-hydrated', { detail: { changed } }));
    })
    .catch(() => {
      dispatchSyncStatus('error', 'No se pudo leer el servidor — usando datos locales');
      // Emitir de todos modos para que la app arranque con los datos locales
      window.dispatchEvent(new CustomEvent('tacam-server-hydrated', { detail: { changed: false } }));
    });
}

// ─── Seed de datos iniciales ──────────────────────────────────────────────────

/**
 * Garantiza que siempre haya al menos la estructura mínima en localStorage.
 * Los datos demo SÓLO se insertan si localStorage está completamente vacío
 * Y el servidor también está vacío (se comprueba tras la hidratación).
 *
 * Regla: esta función NUNCA sobreescribe datos reales existentes.
 */
function seedData() {
  // ── Clientes ──
  const existingClients = loadJson(STORAGE_KEYS.clients, []);
  if (!existingClients.length) {
    // Se marca con __demo para eliminarlo si el servidor trae datos reales
    saveJsonLocal(STORAGE_KEYS.clients, [
      {
        id: crypto.randomUUID(),
        __demo: true,
        name: 'Cliente Demo',
        rut: '12.345.678-9',
        phone: '+56911111111',
        email: 'cliente.demo@tacam.cl',
        address: 'Dirección demo',
        imputadoStatus: 'no_imputado',
        representative: null,
        createdAt: new Date().toISOString()
      }
    ]);
  } else {
    // Normalizar datos existentes sin crear registros nuevos
    const normalizedClients = existingClients.map(client => ({
      ...client,
      imputadoStatus: client.imputadoStatus === 'imputado' ? 'imputado' : 'no_imputado',
      representative: client.imputadoStatus === 'imputado'
        ? (typeof client.representative === 'object' && client.representative
            ? {
                name:       String(client.representative.name       || '').trim(),
                rut:        String(client.representative.rut        || '').trim(),
                phone:      String(client.representative.phone      || '').trim(),
                email:      String(client.representative.email      || '').trim(),
                address:    String(client.representative.address    || '').trim(),
                represents: String(client.representative.represents || client.name || '').trim()
              }
            : {
                name:       String(client.representative || '').trim(),
                rut: '', phone: '', email: '', address: '',
                represents: String(client.name || '').trim()
              })
        : null
    }));
    saveJsonLocal(STORAGE_KEYS.clients, normalizedClients);
  }

  // ── Reservas ──
  const clients  = loadJson(STORAGE_KEYS.clients, []);
  const bookings = loadJson(STORAGE_KEYS.bookings, []);
  if (!bookings.length) {
    saveJsonLocal(STORAGE_KEYS.bookings, [
      {
        id: crypto.randomUUID(),
        __demo: true,
        clientId:       clients[0]?.id || '',
        customer:       'Cliente Demo',
        rut:            '12.345.678-9',
        phone:          '+56911111111',
        email:          'cliente.demo@tacam.cl',
        address:        'Dirección demo',
        imputadoStatus: 'no_imputado',
        representative: null,
        matter:         'Familiar',
        date:           new Date().toISOString().slice(0, 10),
        time:           '10:30',
        assignedTo:     'KATHERINE SERRANO MARREY',
        hiredLawyer:    true,
        notes:          'Consulta por materia familiar.',
        status:         'nueva',
        createdAt:      new Date().toISOString()
      }
    ]);
  } else {
    const normalized = bookings.map(booking => ({
      ...booking,
      hiredLawyer:    typeof booking.hiredLawyer === 'boolean' ? booking.hiredLawyer : Boolean((booking.assignedTo || '').trim()),
      imputadoStatus: booking.imputadoStatus === 'imputado' ? 'imputado' : 'no_imputado',
      representative: booking.imputadoStatus === 'imputado'
        ? (typeof booking.representative === 'object' && booking.representative
            ? {
                name:       String(booking.representative.name       || '').trim(),
                rut:        String(booking.representative.rut        || '').trim(),
                phone:      String(booking.representative.phone      || '').trim(),
                email:      String(booking.representative.email      || '').trim(),
                address:    String(booking.representative.address    || '').trim(),
                represents: String(booking.representative.represents || booking.customer || '').trim()
              }
            : {
                name:       String(booking.representative || '').trim(),
                rut: '', phone: '', email: '', address: '',
                represents: String(booking.customer || '').trim()
              })
        : null
    }));
    saveJsonLocal(STORAGE_KEYS.bookings, normalized);
  }

  // ── Abogadas ──
  syncLawyersData();

  // ── Perfiles ──
  const profiles = loadJson(STORAGE_KEYS.profiles, []);
  if (!profiles.length) {
    saveJsonLocal(STORAGE_KEYS.profiles, [
      {
        id:          crypto.randomUUID(),
        __demo:      true,
        name:        'Administrador TACAM',
        username:    'admin',
        role:        'Admin',
        permissions: ['Reservas', 'Agenda', 'Abogadas', 'Estadísticas']
      }
    ]);
  }
}

/**
 * Después de hidratar: si el servidor trajo datos reales, eliminamos
 * los registros marcados como __demo que sólo existían como placeholder.
 */
function purgeDemoDataIfServerHasReal() {
  ['clients', 'bookings', 'lawyers', 'profiles'].forEach(key => {
    const items = loadJson(STORAGE_KEYS[key], []);
    const realItems = items.filter(item => !item.__demo);
    if (realItems.length < items.length) {
      // Hay demos; si el servidor trajo datos reales ya se fusionaron — limpiamos demos
      const hasReal = items.some(item => !item.__demo);
      if (hasReal) {
        saveJsonLocal(STORAGE_KEYS[key], realItems);
      }
    }
  });
}

// ─── Sincronización de abogadas oficiales ────────────────────────────────────

function normalizeLawyerKey(name) {
  return String(name || '').trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function syncLawyersData() {
  const lawyers        = loadJson(STORAGE_KEYS.lawyers, []);
  const retainedLawyers = lawyers.filter(
    lawyer => !LEGACY_LAWYER_NAMES.has(String(lawyer.name || '').trim())
  );
  const officialKeys = new Set(OFFICIAL_LAWYERS.map(l => normalizeLawyerKey(l.name)));
  const map = new Map();

  retainedLawyers.forEach(lawyer => {
    const key = normalizeLawyerKey(lawyer.name);
    if (!key) return;
    map.set(key, { ...lawyer, id: lawyer.id || crypto.randomUUID(), photo: lawyer.photo || 'assets/logo-color.svg' });
  });

  OFFICIAL_LAWYERS.forEach(lawyer => {
    const key      = normalizeLawyerKey(lawyer.name);
    const existing = map.get(key) || {};
    map.set(key, {
      id:        existing.id        || crypto.randomUUID(),
      name:      lawyer.name,
      rut:       lawyer.rut,
      specialty: lawyer.specialty,
      email:     lawyer.email,
      phone:     existing.phone     || lawyer.phone || '',
      photo:     existing.photo     || lawyer.photo || 'assets/logo-color.svg'
    });
  });

  const syncedLawyers = [
    ...OFFICIAL_LAWYERS.map(l => map.get(normalizeLawyerKey(l.name))),
    ...retainedLawyers
      .filter(l => !officialKeys.has(normalizeLawyerKey(l.name)))
      .map(l => map.get(normalizeLawyerKey(l.name)))
  ].filter(Boolean);

  if (JSON.stringify(lawyers) !== JSON.stringify(syncedLawyers)) {
    saveJsonLocal(STORAGE_KEYS.lawyers, syncedLawyers);
  }
}

// ─── API pública de acceso a datos ───────────────────────────────────────────

function getBookings()         { return loadJson(STORAGE_KEYS.bookings, []); }
function saveBookings(b)       {
  const now = new Date().toISOString();
  const normalized = Array.isArray(b) ? b.map(item => {
    const record = item && typeof item === 'object' ? { ...item } : item;
    if (record && typeof record === 'object') {
      if (!record.id) record.id = crypto.randomUUID();
      if (!record.createdAt) record.createdAt = now;
      record.updatedAt = record.updatedAt || now;
    }
    return record;
  }) : [];
  saveJson(STORAGE_KEYS.bookings, normalized);
}

function getClients()          { return loadJson(STORAGE_KEYS.clients, []); }
function saveClients(c)        {
  const now = new Date().toISOString();
  const normalized = Array.isArray(c) ? c.map(item => {
    const record = item && typeof item === 'object' ? { ...item } : item;
    if (record && typeof record === 'object') {
      if (!record.id) record.id = crypto.randomUUID();
      if (!record.createdAt) record.createdAt = now;
      record.updatedAt = record.updatedAt || now;
    }
    return record;
  }) : [];
  saveJson(STORAGE_KEYS.clients, normalized);
}

function getLawyers()          { return loadJson(STORAGE_KEYS.lawyers, []); }
function saveLawyers(l)        { saveJson(STORAGE_KEYS.lawyers, l); }

function getProfiles()         { return loadJson(STORAGE_KEYS.profiles, []); }
function saveProfiles(p)       { saveJson(STORAGE_KEYS.profiles, p); }

function getSession()          { return loadJson(STORAGE_KEYS.session, { loggedIn: false }); }
function saveSession(s)        { saveJson(STORAGE_KEYS.session, s); }

// ─── Helpers de presentación ─────────────────────────────────────────────────

function statusLabel(status) {
  return ({ nueva: 'Nueva', confirmada: 'Confirmada', atendida: 'Atendida', cancelada: 'Cancelada' })[status] || status;
}

function fmtDate(iso) {
  return new Date(iso).toLocaleString('es-CL', { dateStyle: 'short', timeStyle: 'short' });
}

function cleanPhone(phone) {
  return String(phone || '').replace(/\D/g, '');
}

function normalizeMatterLabel(value) {
  const clean = String(value || '').trim();
  if (!clean) return '';
  const normalized = clean.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  if (normalized.includes('cartel') || normalized.includes('carcel') || normalized.includes('carce')) return 'Visita a la Cárcel';
  return clean;
}

function buildTacamMessage(booking) {
  const appointment = `${booking.date || ''} ${booking.time || ''}`.trim();
  const matter      = normalizeMatterLabel(booking.matter) || 'General';
  return `Desde TACAM, informamos toda la información de su reserva. Persona: ${booking.customer}. Materia: ${matter}. Fecha/Hora: ${appointment}. Abogado: ${booking.assignedTo || 'Por confirmar'}. Estado: ${statusLabel(booking.status)}.`;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ─── Arranque ─────────────────────────────────────────────────────────────────
//
// 1. seedData()  — escribe estructura mínima SIN tocar lo que ya existe
// 2. hydrateFromServer() — trae servidor, fusiona, dispara tacam-server-hydrated
//    └─ dentro del handler: purgeDemoDataIfServerHasReal() limpia placeholders
//
// app.js escucha 'tacam-server-hydrated' y llama renderAll().

seedData();

// Escuchar la hidratación para limpiar demos y NO volver a sincronizar al servidor
window.addEventListener('tacam-server-hydrated', function onHydrated(event) {
  window.removeEventListener('tacam-server-hydrated', onHydrated);
  if (event.detail?.changed) {
    purgeDemoDataIfServerHasReal();
    syncLawyersData(); // re-aplicar oficiales sobre datos fusionados
  }
}, { once: true });

hydrateFromServer();