const loginScreen = document.getElementById('login-screen');
const appShell = document.getElementById('app-shell');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

const bookingsBody = document.getElementById('bookings-body');
const hiredBody = document.getElementById('hired-body');
const agendaBody = document.getElementById('agenda-body');
const imputadosBody = document.getElementById('imputados-body');
const noImputadosBody = document.getElementById('no-imputados-body');
const prisonImputadosBody = document.getElementById('prison-imputados-body');
const clientForm = document.getElementById('client-form');
const clientsBody = document.getElementById('clients-body');
const clientSearchInput = document.getElementById('client-search');
const clientSearchResults = document.getElementById('client-search-results');
const clientSelectedLabel = document.getElementById('client-selected-label');
const selectedClientNameInput = document.getElementById('selected-client-name');
const selectedClientRutInput = document.getElementById('selected-client-rut');
const selectedClientPhoneInput = document.getElementById('selected-client-phone');
const selectedClientEmailInput = document.getElementById('selected-client-email');
const selectedClientAddressInput = document.getElementById('selected-client-address');
const clientEditForm = document.getElementById('client-edit-form');
const clientEditSelect = document.getElementById('client-edit-select');
const deleteClientBtn = document.getElementById('delete-client-btn');
const bookingForm = document.getElementById('booking-form');
const lawyerFilter = document.getElementById('lawyer-filter');
const agendaMonthInput = document.getElementById('agenda-month');
const agendaCalendar = document.getElementById('agenda-calendar');
const agendaLegend = document.getElementById('agenda-color-legend');
const prisonMonthInput = document.getElementById('prison-month');
const prisonLawyerFilter = document.getElementById('prison-lawyer-filter');
const gendarmeriaEmailInput = document.getElementById('gendarmeria-email');
const gendarmeriaEmail2Input = document.getElementById('gendarmeria-email-2');
const sendGendarmeriaEmailBtn = document.getElementById('send-gendarmeria-email');
const gendarmeriaVisitSelect = document.getElementById('gendarmeria-visit-select');
const prisonCalendar = document.getElementById('prison-calendar');
const prisonCalendarLegend = document.getElementById('prison-calendar-legend');
const prisonVisitsBody = document.getElementById('prison-visits-body');
const prisonBookingForm = document.getElementById('prison-booking-form');
const lawyerForm = document.getElementById('lawyer-form');
const lawyerList = document.getElementById('lawyer-list');
const lawyerCalendarFilter = document.getElementById('lawyer-calendar-filter');
const lawyerCalendarMonth = document.getElementById('lawyer-calendar-month');
const lawyerCalendar = document.getElementById('lawyer-calendar');
const lawyerCalendarLegend = document.getElementById('lawyer-calendar-legend');
const sharedOnlyInput = document.getElementById('shared-only');
const prisonLawyerRankingCard = document.getElementById('prison-lawyer-ranking');
const lawyerStatsChart = document.getElementById('lawyer-stats-chart');
const prisonStatsChart = document.getElementById('prison-stats-chart');
const lawyerRankingChart = document.getElementById('lawyer-ranking-chart');
const prisonPersonChart = document.getElementById('prison-person-chart');
const reportLawyerFilter = document.getElementById('report-lawyer-filter');
const downloadGeneralReportBtn = document.getElementById('download-general-report');
const downloadLawyerReportBtn = document.getElementById('download-lawyer-report');
const downloadBookingsReportBtn = document.getElementById('download-bookings-report');
const downloadBackupJsonBtn = document.getElementById('download-backup-json');
const restoreBackupJsonBtn = document.getElementById('restore-backup-json');
const restoreBackupInput = document.getElementById('restore-backup-input');
const printChartButtons = document.querySelectorAll('[data-print-chart]');
const profileForm = document.getElementById('profile-form');
const profileList = document.getElementById('profile-list');
const clientSelect = document.getElementById('client-id-selected');
const hiredLawyerInput = bookingForm.elements.hiredLawyer;
const bookingImputadoStatusInput = bookingForm.elements.bookingImputadoStatus;
const bookingInPrisonInput = bookingForm.elements.bookingInPrison;
const bookingImputadoPrisonFields = Array.from(document.querySelectorAll('.booking-imputado-prison-field'));
const representativeBookingFields = Array.from(document.querySelectorAll('.representative-booking-field'));
const bookingRepresentativeNameInput = bookingForm.elements.bookingRepresentativeName;
const bookingRepresentativeLastNameInput = bookingForm.elements.bookingRepresentativeLastName;
const bookingRepresentativeRutInput = bookingForm.elements.bookingRepresentativeRut;
const bookingRepresentativePhoneInput = bookingForm.elements.bookingRepresentativePhone;
const bookingRepresentativeModuloInput = bookingForm.elements.modulo;
const clientRutInput = clientForm.elements.rut;
const clientPhoneInput = clientForm.elements.phone;
const imputadoStatusInput = clientForm.elements.imputadoStatus;
const inPrisonInput = clientForm.elements.inPrison;
const imputadoPrisonFields = Array.from(document.querySelectorAll('.imputado-prison-field'));
const imputadoModuleInput = clientForm.elements.imputadoModule;
const imputadoModuleFields = Array.from(document.querySelectorAll('.imputado-module-field'));
const representativeCreateFields = Array.from(document.querySelectorAll('.representative-create-field'));
const representativeNameInput = clientForm.elements.representativeName;
const representativeLastNameInput = clientForm.elements.representativeLastName;
const representativeRutInput = clientForm.elements.representativeRut;
const representativePhoneInput = clientForm.elements.representativePhone;
const representativeEmailInput = clientForm.elements.representativeEmail;
const representativeModuloInput = clientForm.elements.representativeModulo;
const representativeAddressInput = clientForm.elements.representativeAddress;
const clientEditRutInput = clientEditForm.elements.rut;
const clientEditPhoneInput = clientEditForm.elements.phone;
const clientEditImputadoStatusInput = clientEditForm.elements.imputadoStatus;
const clientEditInPrisonInput = clientEditForm.elements.inPrison;
const editImputadoPrisonFields = Array.from(document.querySelectorAll('.edit-imputado-prison-field'));
const representativeEditFields = Array.from(document.querySelectorAll('.representative-edit-field'));
const clientEditRepresentativeNameInput = clientEditForm.elements.representativeName;
const clientEditRepresentativeLastNameInput = clientEditForm.elements.representativeLastName;
const clientEditRepresentativeRutInput = clientEditForm.elements.representativeRut;
const clientEditRepresentativePhoneInput = clientEditForm.elements.representativePhone;
const clientEditRepresentativeEmailInput = clientEditForm.elements.representativeEmail;
const clientEditRepresentativeModuloInput = clientEditForm.elements.representativeModulo;
const clientEditRepresentativeAddressInput = clientEditForm.elements.representativeAddress;
const clientEditHiredLaterInput = clientEditForm.elements.hiredLater;
const clientEditAssignedToSelect = clientEditForm.elements.assignedTo;
const prisonClientSelect = prisonBookingForm.elements.clientId;
const prisonAssignedToSelect = prisonBookingForm.elements.assignedTo;
const prisonClientSearchInput = document.getElementById('prison-client-search');
const prisonClientSearchResults = document.getElementById('prison-client-search-results');
const prisonClientSelectedLabel = document.getElementById('prison-client-selected-label');
const prisonClientModuleInput = document.getElementById('prison-client-module');
const chileClock = document.getElementById('chile-clock');
const assignedToSelect = bookingForm.elements.assignedTo;
const moduleTabs = document.querySelectorAll('[data-module-tab]');
const modulePanels = document.querySelectorAll('[data-module-panel]');
const toast = document.getElementById('toast');
const savePopup = document.getElementById('save-popup');
const savePopupMessage = document.getElementById('save-popup-message');
const savePopupOkBtn = document.getElementById('save-popup-ok');
const syncIndicator = document.getElementById('sync-indicator');
const clientsShowMoreBtn = document.getElementById('clients-show-more');
const CLIENTS_PAGE_SIZE = 10;
const APP_CONFIG = {
  twilioEndpoint: 'twilio-whatsapp.php',
  internalToken: String(
    window.APP_CONFIG?.APP_INTERNAL_TOKEN
    || window.__APP_INTERNAL_TOKEN
    || localStorage.getItem('APP_INTERNAL_TOKEN')
    || document.querySelector('meta[name=\"app-internal-token\"]')?.content
    || ''
  ).trim()
};
let toastTimer = null;
let clientsVisibleLimit = CLIENTS_PAGE_SIZE;

function switchModule(moduleName) {
  moduleTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.moduleTab === moduleName);
  });

  modulePanels.forEach(panel => {
    panel.classList.toggle('active', panel.dataset.modulePanel === moduleName);
  });
}

function shouldShowSavePopup(message) {
  const normalized = String(message || '').toLowerCase();
  if (!normalized) return false;
  if (normalized.includes('error') || normalized.includes('no se pudo') || normalized.includes('inválid')) return false;
  return ['guardad', 'actualizad', 'enviad', 'agendad', 'borrad', 'confirmad'].some(token => normalized.includes(token));
}

function showSavePopup(message) {
  if (!savePopup || !savePopupMessage) return;
  savePopupMessage.textContent = String(message || 'Datos guardados correctamente.');
  savePopup.hidden = false;
}

function showToast(message, options = {}) {
  const text = String(message || 'Acción realizada');
  const forcePopup = Boolean(options && options.forcePopup);
  if (forcePopup || shouldShowSavePopup(text)) showSavePopup(text);
  if (!toast) return;
  toast.textContent = text;
  toast.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

function playSaveChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.24);
  } catch (error) {
    // ignore audio limitations on some browsers/environments
  }
  showSavePopup('✅ Datos guardados correctamente. Presiona OK para continuar.');
}

function updateSyncIndicator(status = 'pending', message = 'Sincronización: pendiente', at = '') {
  if (!syncIndicator) return;
  syncIndicator.classList.remove('ok', 'syncing', 'error');
  if (status === 'ok') syncIndicator.classList.add('ok');
  if (status === 'syncing' || status === 'pending') syncIndicator.classList.add('syncing');
  if (status === 'error') syncIndicator.classList.add('error');
  const time = at ? ` (${new Date(at).toLocaleTimeString('es-CL', { hour12: false })})` : '';
  syncIndicator.textContent = `${message}${time}`;
}

function printChartByCanvasId(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!(canvas instanceof HTMLCanvasElement)) {
    showToast('No se encontró el gráfico para imprimir.');
    return;
  }
  const dataUrl = canvas.toDataURL('image/png');
  const popup = window.open('', '_blank', 'width=1100,height=800');
  if (!popup) {
    showToast('Habilita ventanas emergentes para imprimir.');
    return;
  }
  popup.document.write(`<html><head><title>Imprimir gráfico</title></head><body style="margin:0;display:flex;justify-content:center"><img src="${dataUrl}" style="width:100%;max-width:1024px" onload="window.print();window.close();" /></body></html>`);
  popup.document.close();
}


function fillSelectedClientPreview(client) {
  selectedClientNameInput.value = client?.name || '';
  selectedClientRutInput.value = client?.rut || '';
  selectedClientPhoneInput.value = client?.phone || '';
  selectedClientEmailInput.value = client?.email || '';
  selectedClientAddressInput.value = client?.address || '';
  const allowAutoImputado = bookingImputadoStatusInput.dataset.manualChange !== '1';
  if (allowAutoImputado) {
    bookingImputadoStatusInput.value = client?.imputadoStatus === 'imputado' ? 'imputado' : 'no_imputado';
  }
  bookingInPrisonInput.value = client?.inPrison ? 'si' : 'no';
  const representative = client?.representative && typeof client.representative === 'object'
    ? { ...client.representative }
    : null;
  if (representative && !representative.modulo) {
    representative.modulo = client?.imputadoModule || client?.prisonModule || '';
  }
  applyRepresentativeToInputs({
    name: bookingRepresentativeNameInput,
    lastName: bookingRepresentativeLastNameInput,
    rut: bookingRepresentativeRutInput,
    phone: bookingRepresentativePhoneInput,
    email: bookingForm.elements.bookingRepresentativeEmail,
    address: bookingForm.elements.bookingRepresentativeAddress,
    modulo: bookingRepresentativeModuloInput
  }, representative);
  updateBookingRepresentativeVisibility();
}

function getClientModuleValue(client) {
  return String(client?.imputadoModule || client?.prisonModule || '').trim();
}

function setPrisonClientSelection(client, { updateSearch = true } = {}) {
  if (!client) {
    prisonClientSelect.value = '';
    if (prisonClientSelectedLabel) prisonClientSelectedLabel.textContent = 'Contacto seleccionado: ninguno';
    if (prisonClientModuleInput) prisonClientModuleInput.value = '';
    if (updateSearch && prisonClientSearchInput) prisonClientSearchInput.value = '';
    return;
  }

  prisonClientSelect.value = client.id;
  if (prisonClientSelectedLabel) {
    prisonClientSelectedLabel.textContent = `Contacto seleccionado: ${client.name || '-'} · ${client.rut || 'Sin RUT'}`;
  }
  if (prisonClientModuleInput) {
    prisonClientModuleInput.value = getClientModuleValue(client);
  }
  if (updateSearch && prisonClientSearchInput) {
    prisonClientSearchInput.value = `${client.name || ''} (${client.rut || 'Sin RUT'})`;
  }
}

function renderPrisonClientSearchResults(clients, query) {
  if (!prisonClientSearchResults) return;
  prisonClientSearchResults.replaceChildren();
  if (!query) return;

  const limited = clients.slice(0, 8);
  if (!limited.length) {
    const empty = document.createElement('div');
    empty.className = 'muted';
    empty.textContent = 'No se encontraron contactos.';
    prisonClientSearchResults.appendChild(empty);
    return;
  }

  limited.forEach(client => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'search-result-item';
    const modulo = getClientModuleValue(client);
    item.textContent = `${client.name || ''} · ${client.rut || 'Sin RUT'} · ${client.phone || 'Sin teléfono'}${modulo ? ` · Módulo ${modulo}` : ''}`;
    item.addEventListener('click', () => {
      setPrisonClientSelection(client);
      prisonClientSearchResults.replaceChildren();
      if (prisonClientModuleInput && !prisonClientModuleInput.value) prisonClientModuleInput.focus();
      showToast('Contacto cargado para agendar visita.');
    });
    prisonClientSearchResults.appendChild(item);
  });
}

let prisonClientSearchTimer = null;
function queuePrisonClientSearch() {
  if (prisonClientSearchTimer) clearTimeout(prisonClientSearchTimer);
  prisonClientSearchTimer = setTimeout(() => {
    const query = String(prisonClientSearchInput?.value || '').trim().toLowerCase();
    if (!query) {
      renderPrisonClientSearchResults([], '');
      const selectedClient = getClients().find(client => client.id === prisonClientSelect.value);
      setPrisonClientSelection(selectedClient || null, { updateSearch: false });
      return;
    }

    const clients = getVisibleClientsForSession()
      .filter(client => {
        const haystack = `${client.name || ''} ${client.rut || ''} ${client.phone || ''} ${getClientModuleValue(client)}`.toLowerCase();
        return haystack.includes(query);
      })
      .sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'es'));

    renderPrisonClientSearchResults(clients, query);
  }, 180);
}

function updateRepresentativeVisibility() {
  const isImputado = imputadoStatusInput.value === 'imputado';
  imputadoPrisonFields.forEach(field => {
    field.hidden = !isImputado;
  });
  if (!isImputado) inPrisonInput.value = 'no';
  representativeCreateFields.forEach(field => {
    field.hidden = !isImputado;
    const input = field.querySelector('input');
    if (input) {
      input.required = isImputado && (input.name === 'representativeName' || input.name === 'representativeLastName');
      if (!isImputado) input.value = '';
    }
  });
  updateImputadoModuleVisibility();
}

function updateImputadoModuleVisibility() {
  if (!imputadoModuleFields.length || !imputadoModuleInput) return;
  const isImputado = imputadoStatusInput.value === 'imputado' && inPrisonInput.value === 'si';
  imputadoModuleFields.forEach(field => {
    field.hidden = !isImputado;
    const input = field.querySelector('input');
    if (input) {
      input.required = isImputado;
      if (!isImputado) input.value = '';
    }
  });
}


function updateEditRepresentativeVisibility() {
  const isImputado = clientEditImputadoStatusInput.value === 'imputado';
  editImputadoPrisonFields.forEach(field => {
    field.hidden = !isImputado;
  });
  if (!isImputado) clientEditInPrisonInput.value = 'no';
  representativeEditFields.forEach(field => {
    field.hidden = !isImputado;
    const input = field.querySelector('input');
    if (input) {
      input.required = isImputado && (input.name === 'representativeName' || input.name === 'representativeLastName');
    }
  });
}

function buildRepresentativeRecord(data, representsName, prefix = '') {
  const base = prefix ? `${prefix}Representative` : 'representative';
  const name = String(data.get(`${base}Name`) || '').trim();
  const lastName = String(data.get(`${base}LastName`) || '').trim();
  const rutRaw = String(data.get(`${base}Rut`) || '').trim();
  const phoneRaw = String(data.get(`${base}Phone`) || '').trim();
  const rut = rutRaw ? formatRut(rutRaw) : '';
  const phone = phoneRaw ? formatPhone(phoneRaw) : '';
  const email = String(data.get(`${base}Email`) || '').trim();
  const modulo = String(data.get(`${base}Modulo`) || '').trim();
  const address = String(data.get(`${base}Address`) || '').trim();
  if (!name && !lastName && !rut && !phone && !email && !modulo && !address) return null;
  return { name, lastName, rut, phone, email, modulo, address, represents: representsName || '' };
}

function updateBookingRepresentativeVisibility() {
  const isImputado = bookingImputadoStatusInput.value === 'imputado';
  bookingImputadoPrisonFields.forEach(field => {
    field.hidden = !isImputado;
  });
  if (!isImputado) bookingInPrisonInput.value = 'no';
  representativeBookingFields.forEach(field => {
    field.hidden = !isImputado;
    const input = field.querySelector('input');
    if (input) {
      input.required = isImputado && (input.name === 'bookingRepresentativeName' || input.name === 'bookingRepresentativeLastName');
      if (!isImputado) input.value = '';
    }
  });
}


function promptRepresentativeData(existing = null, representsName = 'contacto') {
  const name = window.prompt(`Nombre representante de ${representsName}`, existing?.name || '');
  if (name === null) return null;
  const trimmedName = String(name || '').trim();
  if (!trimmedName) return null;
  const lastName = window.prompt(`Apellido representante de ${representsName}`, existing?.lastName || '');
  if (lastName === null) return null;
  const trimmedLastName = String(lastName || '').trim();
  if (!trimmedLastName) return null;

  const rutRaw = window.prompt(`RUT representante de ${representsName}`, existing?.rut || '');
  if (rutRaw === null) return null;
  const phoneRaw = window.prompt(`Teléfono representante de ${representsName}`, existing?.phone || '');
  if (phoneRaw === null) return null;
  const email = window.prompt(`Correo representante de ${representsName}`, existing?.email || '');
  if (email === null) return null;
  const address = window.prompt(`Dirección representante de ${representsName}`, existing?.address || '');
  if (address === null) return null;

  return {
    name: trimmedName,
    lastName: trimmedLastName,
    rut: rutRaw ? formatRut(rutRaw) : '',
    phone: phoneRaw ? formatPhone(phoneRaw) : '',
    email: String(email || '').trim(),
    address: String(address || '').trim()
  };
}

function applyRepresentativeToInputs(target, representative = null) {
  const rep = representative || {};
  target.name.value = rep.name || '';
  target.lastName.value = rep.lastName || '';
  target.rut.value = rep.rut || '';
  target.phone.value = rep.phone || '';
  target.email.value = rep.email || '';
  if (target.modulo) target.modulo.value = rep.modulo || '';
  target.address.value = rep.address || '';
}

function getBookingRepresentative(booking) {
  const rep = booking.representative;
  if (rep && typeof rep === 'object' && String(rep.name || '').trim()) {
    return `${rep.name} ${rep.lastName || ''}`.trim() + (rep.represents ? ` (representa a ${rep.represents})` : '');
  }
  if (!booking.clientId) return '';
  const client = getClients().find(item => item.id === booking.clientId);
  if (client?.representative && typeof client.representative === 'object' && String(client.representative.name || '').trim()) {
    return `${client.representative.name} ${client.representative.lastName || ''}`.trim() + (client.representative.represents ? ` (representa a ${client.representative.represents})` : '');
  }
  return '';
}

function showApp() {
  loginScreen.hidden = true;
  appShell.hidden = false;
  applyRoleAccess();
  if (typeof hydrateFromServer === 'function') hydrateFromServer();
}

function showLogin() {
  loginScreen.hidden = false;
  appShell.hidden = true;
  loginError.hidden = true;
}

const ALLOWED_CREDENTIALS = [
  { username: 'admin', password: 'admin' }
];

const LAWYER_COLORS = ['#8f203a', '#2166a5', '#2a9d8f', '#e76f51', '#6a4c93', '#e9c46a', '#4f772d'];
const PRISON_VISIT_MATTER = 'Visita a la Cárcel';
const UNASSIGNED_LAWYER_LABEL = 'No asignado aún';
const GENDARMERIA_RECIPIENTS = [
  'Omar.sepulveda@gendarmeria.cl',
  'christian.bravo@gendarmeria.cl'
];
const GENDARMERIA_CC_RECIPIENTS = [
  'administracion@tacam.cl',
  'estudiojuridico@tacam.cl',
  'stapia@tacam.cl',
  'asistente@tacam.cl',
  'ccliment@tacam.cl',
  'vreichert@tacam.cl',
  'daracena@tacam.cl'
];
const DEFAULT_LAWYER_EMAILS = [
  'administracion@tacam.cl',
  'estudiojuridico@tacam.cl',
  'asistente@tacam.cl',
  'ccliment@tacam.cl',
  'vreichert@tacam.cl',
  'stapia@tacam.cl',
  'daracena@tacam.cl'
];

function normalizeMatterLabel(value) {
  const clean = String(value || '').trim();
  if (!clean) return '';
  const normalized = clean.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  if (normalized.includes('cartel') || normalized.includes('carcel') || normalized.includes('carce')) return PRISON_VISIT_MATTER;
  if (normalized.includes('familia') || normalized.includes('familiar')) return 'Familia';
  return clean;
}

function isPrisonVisit(booking) {
  return normalizeMatterLabel(booking?.matter) === PRISON_VISIT_MATTER;
}

function normalizeAssignedToValue(value) {
  const clean = String(value || '').trim();
  return clean === UNASSIGNED_LAWYER_LABEL ? '' : clean;
}

function getProfileByCredentials(username, password) {
  const cleanUser = String(username || '').trim().toLowerCase();
  return getProfiles().find(profile =>
    (String(profile.username || '').trim().toLowerCase() === cleanUser ||
      String(profile.email || '').trim().toLowerCase() === cleanUser) &&
    String(profile.password || '').trim() === String(password || '').trim()
  ) || null;
}

function getCurrentSessionRole() {
  return String(getSession().role || 'Admin');
}

function getCurrentSessionLawyerName() {
  return String(getSession().profileName || '').trim();
}

function tryLogin(username, password) {
  if (ALLOWED_CREDENTIALS.some(cred => cred.username === username && cred.password === password)) {
    return { username, role: 'Admin', profileName: '' };
  }
  const profile = getProfileByCredentials(username, password);
  if (!profile) return null;
  return { username: profile.username, role: profile.role || 'Recepción', profileName: profile.name || '' };
}

function applyRoleAccess() {
  const session = getSession();
  const role = String(session.role || 'Admin');
  const sessionLawyer = getCurrentSessionLawyerName();
  const allowedForLawyer = new Set(['create', 'clients', 'prison-visits', 'imputados', 'lawyers']);

  moduleTabs.forEach(tab => {
    if (role !== 'Abogada') {
      tab.hidden = false;
      return;
    }
    tab.hidden = !allowedForLawyer.has(tab.dataset.moduleTab || '');
  });

  if (role === 'Abogada' && !allowedForLawyer.has(document.querySelector('.module-tab.active')?.dataset.moduleTab || '')) {
    switchModule('create');
  }

  if (prisonLawyerFilter) prisonLawyerFilter.disabled = role === 'Abogada';
  if (lawyerCalendarFilter) lawyerCalendarFilter.disabled = role === 'Abogada';
  if (sharedOnlyInput) sharedOnlyInput.disabled = role === 'Abogada';

  if (role === 'Abogada' && sessionLawyer) {
    if (assignedToSelect) {
      assignedToSelect.value = sessionLawyer;
      assignedToSelect.disabled = true;
    }
    if (prisonAssignedToSelect) {
      prisonAssignedToSelect.value = sessionLawyer;
      prisonAssignedToSelect.disabled = true;
    }
    if (lawyerFilter) lawyerFilter.value = sessionLawyer;
    if (prisonLawyerFilter) prisonLawyerFilter.value = sessionLawyer;
    if (reportLawyerFilter) reportLawyerFilter.value = sessionLawyer;
  } else {
    if (assignedToSelect) assignedToSelect.disabled = !hiredLawyerInput.checked;
    if (prisonAssignedToSelect) prisonAssignedToSelect.disabled = false;
  }
}

function getVisibleClientsForSession() {
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const clients = getClients();
  if (role !== 'Abogada' || !sessionLawyer) return clients;

  const clientIds = new Set(getBookings()
    .filter(booking => (booking.assignedTo || '').trim() === sessionLawyer)
    .map(booking => booking.clientId)
    .filter(Boolean));

  return clients.filter(client =>
    clientIds.has(client.id) ||
    String(client.assignedTo || '').trim() === sessionLawyer ||
    String(client.createdByLawyer || '').trim() === sessionLawyer
  );
}


function getVisibleBookingsForSession(bookings = getBookings()) {
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  if (role !== 'Abogada' || !sessionLawyer) return bookings;
  return bookings.filter(booking => String(booking.assignedTo || '').trim() === sessionLawyer);
}

function ensureDefaultLawyerAccessProfiles() {
  const profiles = getProfiles();
  const normalized = DEFAULT_LAWYER_EMAILS.map(email => email.toLowerCase());
  const refreshedProfiles = normalized.map(cleanEmail => {
    const username = cleanEmail.split('@')[0];
    const existing = profiles.find(profile =>
      String(profile.email || '').trim().toLowerCase() === cleanEmail
      || String(profile.username || '').trim().toLowerCase() === username
    );
    return {
      id: existing?.id || crypto.randomUUID(),
      name: String(existing?.name || username.toUpperCase()).trim(),
      username,
      password: 'tacam123',
      role: 'Abogada',
      email: cleanEmail,
      phone: String(existing?.phone || '').trim(),
      specialty: String(existing?.specialty || '').trim(),
      permissions: ['Visitas', 'Imputados', 'Editar contactos']
    };
  });
  saveProfiles(refreshedProfiles);
}

function syncLawyerAndProfileUsers() {
  const lawyers = getLawyers();
  const profiles = getProfiles();
  let changedLawyers = false;
  let changedProfiles = false;

  const normalizeEmail = value => String(value || '').trim().toLowerCase();
  const normalizeUsername = value => String(value || '').trim().toLowerCase();
  const normalizeName = value => String(value || '').trim().toLowerCase();

  const uniqueProfiles = [];
  const profileKeyMap = new Map();
  profiles.forEach(profile => {
    const keys = [
      normalizeEmail(profile.email),
      normalizeUsername(profile.username)
    ].filter(Boolean);
    const duplicated = keys.find(key => profileKeyMap.has(key));
    if (duplicated) {
      changedProfiles = true;
      return;
    }
    uniqueProfiles.push(profile);
    keys.forEach(key => profileKeyMap.set(key, profile));
  });

  const uniqueLawyers = [];
  const lawyerKeyMap = new Map();
  lawyers.forEach(lawyer => {
    const keys = [
      normalizeEmail(lawyer.email),
      normalizeName(lawyer.name)
    ].filter(Boolean);
    const duplicated = keys.find(key => lawyerKeyMap.has(key));
    if (duplicated) {
      changedLawyers = true;
      return;
    }
    uniqueLawyers.push(lawyer);
    keys.forEach(key => lawyerKeyMap.set(key, lawyer));
  });

  uniqueLawyers.forEach(lawyer => {
    const email = normalizeEmail(lawyer.email);
    const username = email ? email.split('@')[0] : '';
    const matchedProfile = uniqueProfiles.find(profile =>
      normalizeEmail(profile.email) === email ||
      normalizeUsername(profile.username) === username ||
      normalizeName(profile.name) === normalizeName(lawyer.name)
    );
    if (!matchedProfile) return;

    if (email && normalizeEmail(matchedProfile.email) !== email) {
      matchedProfile.email = email;
      changedProfiles = true;
    }
    if (username && normalizeUsername(matchedProfile.username) !== username) {
      matchedProfile.username = username;
      changedProfiles = true;
    }
    if ((matchedProfile.role || '') !== 'Abogada') {
      matchedProfile.role = 'Abogada';
      changedProfiles = true;
    }
    if (lawyer.phone && matchedProfile.phone !== lawyer.phone) {
      matchedProfile.phone = lawyer.phone;
      changedProfiles = true;
    }
  });

  uniqueProfiles
    .filter(profile => (profile.role || '').trim() === 'Abogada')
    .forEach(profile => {
      const email = normalizeEmail(profile.email);
      const match = uniqueLawyers.find(lawyer =>
        normalizeEmail(lawyer.email) === email ||
        normalizeName(lawyer.name) === normalizeName(profile.name)
      );
      if (match) {
        if (email && normalizeEmail(match.email) !== email) {
          match.email = email;
          changedLawyers = true;
        }
        if (profile.phone && match.phone !== profile.phone) {
          match.phone = profile.phone;
          changedLawyers = true;
        }
        return;
      }
      uniqueLawyers.unshift({
        id: crypto.randomUUID(),
        name: String(profile.name || profile.username || 'Abogada').trim(),
        specialty: String(profile.specialty || '').trim(),
        phone: String(profile.phone || '').trim(),
        email,
        rut: String(profile.rut || '').trim(),
        photo: 'assets/logo-color.svg'
      });
      changedLawyers = true;
    });

  if (changedProfiles || uniqueProfiles.length !== profiles.length) saveProfiles(uniqueProfiles);
  if (changedLawyers || uniqueLawyers.length !== lawyers.length) saveLawyers(uniqueLawyers);
}

function hasNotificationConsent(booking) {
  return Boolean(booking?.notificationsConsent);
}

async function sendEmailViaBrevo(booking, subject, message, options = {}) {
  const email = String(booking?.email || '').trim();
  if (!email) return false;

  try {
    const response = await fetch('brevo-email.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        toEmail: email,
        toName: booking.customer || 'Cliente',
        subject,
        textContent: message,
        templateType: String(options?.templateType || '').trim(),
        templateData: options?.templateData && typeof options.templateData === 'object' ? options.templateData : {}
      })
    });

    if (!response.ok) {
      const body = await response.text();
      if (response.status === 401) {
        if (body.toLowerCase().includes('key not found')) {
          console.warn('Brevo rechazó la autenticación: API key no encontrada. Revisa BREVO_API_KEY en el servidor.');
        } else {
          console.warn('Brevo rechazó la autenticación. Revisar API key o restricciones IP en servidor.');
        }
      } else {
        console.warn(`Brevo email error HTTP ${response.status}`);
      }
      if (body) console.warn('Brevo detalle:', body);
      return false;
    }

    return true;
  } catch (error) {
    console.warn('Brevo email request failed', error);
    return false;
  }
}

function normalizeWhatsAppPhone(phoneRaw) {
  const destination = cleanPhone(phoneRaw);
  if (!destination) return '';
  const normalized = destination.startsWith('+') ? destination : `+${destination}`;
  return /^\+\d{8,15}$/.test(normalized) ? normalized : '';
}

function formatReadableDate(dateValue) {
  if (!dateValue) return '';
  const date = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;
  return date.toLocaleDateString('es-CL', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
}

async function sendWhatsAppNotification(phoneRaw, message) {
  const toPhone = normalizeWhatsAppPhone(phoneRaw);
  const cleanMessage = String(message || '').trim();
  if (!toPhone || !cleanMessage) {
    return { ok: false, status: 'invalid_payload', twilioSid: '', errorMessage: 'phone_or_message_invalid' };
  }

  if (!APP_CONFIG.internalToken) {
    console.warn('APP_INTERNAL_TOKEN no configurado para endpoint interno de WhatsApp. El envío se omite para evitar 401.');
    return { ok: false, status: 'missing_internal_token', twilioSid: '', errorMessage: 'missing_internal_token' };
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Internal-Token': APP_CONFIG.internalToken
  };

  try {
    const response = await fetch(APP_CONFIG.twilioEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ toPhone, message: cleanMessage })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const remoteError = String(data.error_message || '').trim();
      if (response.status === 401) {
        console.warn('Twilio endpoint rechazó autenticación (401). Revisa APP_INTERNAL_TOKEN en frontend y servidor.');
      } else {
        console.warn(`Twilio endpoint error HTTP ${response.status}.`);
      }
      if (remoteError) console.warn('Twilio detalle:', remoteError);
    }

    return {
      ok: Boolean(response.ok && data.ok),
      status: String(data.status || (response.ok ? 'sent' : 'error')),
      twilioSid: String(data.twilio_sid || ''),
      errorMessage: String(data.error_message || '')
    };
  } catch (error) {
    console.warn('Twilio WhatsApp request failed', error);
    return { ok: false, status: 'request_failed', twilioSid: '', errorMessage: 'request_failed' };
  }
}

function buildWhatsAppConfirmationMessage(booking) {
  const name = String(booking?.customer || '').trim();
  const dateText = formatReadableDate(booking?.date);
  const timeText = String(booking?.time || '').trim();
  if (!name || !dateText || !timeText) return '';
  return `Hola ${name}, tu cita ha sido confirmada.\n\nTe esperamos el día ${dateText} a las ${timeText}.\n\nSi necesitas modificarla, responde a este mensaje o contáctanos.\n\nEquipo TACAM`;
}

async function notifyBooking(booking) {
  if (!hasNotificationConsent(booking)) return false;
  const result = await sendWhatsAppNotification(booking.phone, buildTacamMessage(booking));
  return result.ok;
}

function buildRescheduleMessage(booking, fromDate, toDate) {
  const fromText = `${fromDate || '-'} ${booking.time || ''}`.trim();
  const toText = `${toDate || '-'} ${booking.time || ''}`.trim();
  return `TACAM: su cita fue reagendada. Cliente: ${booking.customer || 'Cliente'}. Materia: ${normalizeMatterLabel(booking.matter) || 'General'}. Antes: ${fromText}. Nueva fecha: ${toText}. Abogada: ${booking.assignedTo || 'Por confirmar'}.`;
}

function getAppointmentDateTime(booking) {
  if (!booking.date || !booking.time) return null;
  const dateTime = new Date(`${booking.date}T${booking.time}:00`);
  return Number.isNaN(dateTime.getTime()) ? null : dateTime;
}

function buildReminderMessage(booking, minutesLeft) {
  const matter = normalizeMatterLabel(booking.matter) || 'General';
  if (isPrisonVisit(booking)) {
    return `Recordatorio TACAM: tienes una ${PRISON_VISIT_MATTER.toLowerCase()} en ${minutesLeft} minutos. Fecha/Hora: ${booking.date} ${booking.time}. Abogada: ${booking.assignedTo || 'Por confirmar'}.`;
  }
  return `Recordatorio TACAM: vas a tener una cita en ${minutesLeft} minutos. Fecha/Hora: ${booking.date} ${booking.time}. Materia: ${matter}. Abogada: ${booking.assignedTo || 'Por confirmar'}.`;
}

function build24hReminderMessage(booking) {
  const matter = normalizeMatterLabel(booking.matter) || 'General';
  if (isPrisonVisit(booking)) {
    return `Recordatorio TACAM: mañana tienes una ${PRISON_VISIT_MATTER.toLowerCase()}. Fecha/Hora: ${booking.date} ${booking.time}. Abogada: ${booking.assignedTo || 'Por confirmar'}.`;
  }
  return `Recordatorio TACAM: tu cita será en 24 horas. Fecha/Hora: ${booking.date} ${booking.time}. Materia: ${matter}. Abogada: ${booking.assignedTo || 'Por confirmar'}.`;
}

function buildVisitScheduledMessage(booking) {
  const matter = normalizeMatterLabel(booking.matter) || 'General';
  if (isPrisonVisit(booking)) {
    return `TACAM: se agendó una ${PRISON_VISIT_MATTER.toLowerCase()} para ${booking.date} ${booking.time}. Abogada: ${booking.assignedTo || 'Por confirmar'}. Se enviarán recordatorios por WhatsApp y correo.`;
  }
  return `Calendario de visitas TACAM: enviamos correo automático a la persona. Tu cita quedó agendada para ${booking.date} ${booking.time}. Materia: ${matter}. Abogada: ${booking.assignedTo || 'Por confirmar'}. Luego recibirás un recordatorio de que vas a tener una cita.`;
}

function buildEmailTemplateData(booking, extra = {}) {
  return {
    fecha: String(extra.fecha || booking?.date || '-').trim() || '-',
    hora: String(extra.hora || booking?.time || '--:--').trim() || '--:--',
    abogado: String(extra.abogado || booking?.assignedTo || 'Por confirmar').trim() || 'Por confirmar',
    area: String(extra.area || normalizeMatterLabel(booking?.matter) || 'General').trim() || 'General',
    ubicacion: String(extra.ubicacion || booking?.address || 'Antofagasta, Chile').trim() || 'Antofagasta, Chile'
  };
}

async function notifyBookingChannels(booking, message, emailSubject, emailOptions = {}) {
  if (!hasNotificationConsent(booking)) return false;

  const targets = [cleanPhone(booking.phone), getLawyerPhone(booking.assignedTo)].filter(Boolean);
  const uniqueTargets = [...new Set(targets)];
  const whatsappResults = await Promise.all(uniqueTargets.map(target => sendWhatsAppNotification(target, message)));
  const sent = whatsappResults.some(item => item.ok);
  if (!sent && uniqueTargets.length) {
    console.warn('No se pudo enviar WhatsApp por Twilio para la reserva', booking?.id || '');
  }

  const emailSent = await sendEmailViaBrevo(booking, emailSubject, message, emailOptions);
  return sent || emailSent;
}

async function notifyVisitScheduled(booking) {
  const message = buildWhatsAppConfirmationMessage(booking) || buildVisitScheduledMessage(booking);
  return notifyBookingChannels(booking, message, isPrisonVisit(booking) ? 'TACAM: visita a la cárcel agendada' : 'Calendario de visitas TACAM: cita agendada', {
    templateType: 'appointment_scheduled',
    templateData: buildEmailTemplateData(booking)
  });
}

function getLawyerPhone(lawyerName) {
  const lawyer = getLawyers().find(item => (item.name || '').trim() === (lawyerName || '').trim());
  return lawyer ? cleanPhone(lawyer.phone) : '';
}

async function notifyReschedule(booking, fromDate, toDate) {
  const message = buildRescheduleMessage(booking, fromDate, toDate);
  return notifyBookingChannels(booking, message, 'Reagendamiento de cita TACAM', {
    templateType: 'reschedule',
    templateData: buildEmailTemplateData(booking, { fecha: toDate })
  });
}

async function notifyUpcomingAppointments() {
  const now = new Date();
  const bookings = getBookings();
  let hasUpdates = false;

  for (const booking of bookings) {
    const appointment = getAppointmentDateTime(booking);
    if (!appointment || booking.status === 'cancelada' || booking.status === 'atendida') continue;

    const diffMinutes = Math.round((appointment.getTime() - now.getTime()) / 60000);
    if (diffMinutes < 0) continue;

    if (diffMinutes <= 1440 && !booking.reminder24hSentAt) {
      const sent24h = await notifyBookingChannels(booking, build24hReminderMessage(booking), 'Recordatorio TACAM: cita en 24 horas', {
        templateType: 'reminder_24h',
        templateData: buildEmailTemplateData(booking)
      });
      if (sent24h) {
        booking.reminder24hSentAt = now.toISOString();
        hasUpdates = true;
      }
    }


    if (diffMinutes <= 60 && !booking.reminder1hSentAt) {
      const sent1h = await notifyBookingChannels(booking, buildReminderMessage(booking, diffMinutes), 'Recordatorio TACAM: vas a tener una cita', {
        templateType: 'reminder_1h',
        templateData: buildEmailTemplateData(booking)
      });
      if (sent1h) {
        booking.reminder1hSentAt = now.toISOString();
        hasUpdates = true;
      }
    }
  }


  if (hasUpdates) {
    saveBookings(bookings);
    renderAll();
  }
}

function promptRescheduleData(booking, suggestedDate) {
  const dateValue = String(window.prompt('Nueva fecha de la cita (YYYY-MM-DD)', suggestedDate || booking.date || '') || '').trim();
  if (!dateValue) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    showToast('Fecha inválida. Usa formato YYYY-MM-DD.');
    return null;
  }
  const timeValue = String(window.prompt('Nueva hora de la cita (HH:MM)', booking.time || '09:00') || '').trim();
  if (!timeValue) return null;
  if (!/^\d{2}:\d{2}$/.test(timeValue)) {
    showToast('Hora inválida. Usa formato HH:MM.');
    return null;
  }
  return { date: dateValue, time: timeValue };
}

function moveBookingDate(bookingId, suggestedDate) {
  const bookings = getBookings();
  const booking = bookings.find(item => item.id === bookingId);
  if (!booking) return;
  const nextData = promptRescheduleData(booking, suggestedDate);
  if (!nextData) return;
  if (booking.date === nextData.date && booking.time === nextData.time) return;

  const oldDate = booking.date;
  booking.date = nextData.date;
  booking.time = nextData.time;
  booking.reminder24hSentAt = '';
  booking.reminder1hSentAt = '';
  saveBookings(bookings);
  renderAll();
  void notifyReschedule(booking, oldDate, nextData.date);
  showToast('Cita reprogramada correctamente.');
}

function updateBooking(bookingId, updater) {
  const bookings = getBookings();
  const booking = bookings.find(item => item.id === bookingId);
  if (!booking) return;
  updater(booking);
  saveBookings(bookings);
  playSaveChime();
  renderAll();
  showToast('Cambios guardados correctamente.');
}


function buildStatusChangeMessage(booking, status) {
  const appointment = `${booking.date || '-'} ${booking.time || ''}`.trim();
  const matter = normalizeMatterLabel(booking.matter) || 'General';

  if (status === 'confirmada') {
    return `TACAM: tu reserva fue confirmada. Fecha/Hora: ${appointment}. Materia: ${matter}. Abogada: ${booking.assignedTo || 'Por confirmar'}.`;
  }

  if (status === 'cancelada') {
    return `TACAM: tu reserva fue cancelada. Fecha/Hora: ${appointment}. Materia: ${matter}. Si necesitas reprogramar, contáctanos.`;
  }

  return `TACAM: el estado de tu reserva cambió a ${statusLabel(status)}. Fecha/Hora: ${appointment}. Materia: ${matter}.`;
}

async function updateBookingStatusWithNotification(bookingId, status) {
  const bookings = getBookings();
  const booking = bookings.find(item => item.id === bookingId);
  if (!booking) return;

  booking.status = status;
  saveBookings(bookings);
  renderAll();
  showToast(`Estado actualizado a ${statusLabel(status)}.`);

  const subject = status === 'confirmada'
    ? 'TACAM: reserva confirmada'
    : status === 'cancelada'
      ? 'TACAM: reserva cancelada'
      : `TACAM: estado actualizado (${statusLabel(status)})`;

  await notifyBookingChannels(booking, buildStatusChangeMessage(booking, status), subject, {
    templateType: 'status_update',
    templateData: buildEmailTemplateData(booking)
  });
}

function formatAppointment(booking) {
  return `${booking.date || '-'} ${booking.time || ''}`.trim();
}

function appendCell(row, text) {
  const cell = document.createElement('td');
  cell.textContent = text;
  row.appendChild(cell);
  return cell;
}

function formatRut(value) {
  const clean = String(value || '').replace(/[^0-9kK]/g, '').toUpperCase();
  if (!clean) return '';
  if (clean.length === 1) return clean;

  const verifier = clean.slice(-1);
  const body = clean.slice(0, -1).slice(0, 8);
  const grouped = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${grouped}-${verifier}`;
}

function formatPhone(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  let digits = String(value || '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('56')) digits = digits.slice(2);
  if (digits.startsWith('0')) digits = digits.slice(1);
  if (!digits.startsWith('9')) digits = `9${digits}`;
  digits = digits.slice(0, 9);
  return `+56${digits}`;
}

function isValidRut(value) {
  const clean = String(value || '').replace(/[.\-]/g, '').toUpperCase();
  return /^\d{7,8}[\dK]$/.test(clean);
}

function isValidPhone(value) {
  return /^\+569\d{8}$/.test(String(value || ''));
}

function updateChileClock() {
  if (!chileClock) return;
  chileClock.textContent = new Date().toLocaleTimeString('es-CL', {
    timeZone: 'America/Santiago',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function getLawyerNames() {
  const names = new Set();

  getLawyers().forEach(lawyer => {
    const name = String(lawyer.name || '').trim();
    if (name) names.add(name);
  });

  return [...names].sort((a, b) => a.localeCompare(b, 'es'));
}

function fillSelectWithNames(select, names, firstLabel) {
  const currentValue = select.value;
  select.replaceChildren();

  const first = document.createElement('option');
  first.value = '';
  first.textContent = firstLabel;
  select.appendChild(first);

  names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });

  if (names.includes(currentValue)) {
    select.value = currentValue;
  }
}

function renderLawyerOptions() {
  const names = getLawyerNames();
  fillSelectWithNames(assignedToSelect, names, UNASSIGNED_LAWYER_LABEL);
  fillSelectWithNames(prisonAssignedToSelect, names, UNASSIGNED_LAWYER_LABEL);
  fillSelectWithNames(clientEditAssignedToSelect, names, UNASSIGNED_LAWYER_LABEL);
  fillSelectWithNames(prisonLawyerFilter, names, 'Todas');
  fillSelectWithNames(lawyerFilter, names, 'Todos');
  fillSelectWithNames(lawyerCalendarFilter, names, 'Todas');
  fillSelectWithNames(reportLawyerFilter, names, 'Todas');
}

function renderClientOptions() {
  const query = String(clientSearchInput.value || '').trim().toLowerCase();
  const allClients = getVisibleClientsForSession()
    .sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'es'));
  const clients = allClients
    .filter(client => {
      if (!query) return true;
      const haystack = `${client.name || ''} ${client.rut || ''} ${client.phone || ''}`.toLowerCase();
      return haystack.includes(query);
    });

  renderClientSearchResults(clients, query);
  const selectedClient = getClients().find(client => client.id === clientSelect.value);
  clientSelectedLabel.textContent = selectedClient
    ? `Contacto seleccionado: ${selectedClient.name} · ${selectedClient.rut}`
    : 'Contacto seleccionado: ninguno';
  fillSelectedClientPreview(selectedClient || null);

  const selectedPrisonClient = prisonClientSelect.value;
  prisonClientSelect.replaceChildren();
  const firstPrison = document.createElement('option');
  firstPrison.value = '';
  firstPrison.textContent = allClients.length ? 'Seleccione contacto' : 'No hay contactos guardados';
  prisonClientSelect.appendChild(firstPrison);
  allClients.forEach(client => {
    const option = document.createElement('option');
    option.value = client.id;
    option.textContent = `${client.name} · ${client.rut}`;
    prisonClientSelect.appendChild(option);
  });

  const selectedPrisonClientData = allClients.find(client => client.id === selectedPrisonClient) || null;
  if (selectedPrisonClientData) {
    setPrisonClientSelection(selectedPrisonClientData, { updateSearch: false });
  } else {
    setPrisonClientSelection(null, { updateSearch: false });
  }
}

function renderClientSearchResults(clients, query) {
  clientSearchResults.replaceChildren();
  if (!query) return;

  const limited = clients.slice(0, 8);
  if (!limited.length) return;

  limited.forEach(client => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'search-result-item';
    item.textContent = `${client.name} · ${client.rut} · ${client.phone}`;
    item.addEventListener('click', () => {
      clientSelect.value = client.id;
      clientSearchInput.value = `${client.name} (${client.rut})`;
      clientSelectedLabel.textContent = `Contacto seleccionado: ${client.name} · ${client.rut}`;
      bookingImputadoStatusInput.dataset.manualChange = '0';
      fillSelectedClientPreview(client);
      clientSearchResults.replaceChildren();
    });
    clientSearchResults.appendChild(item);
  });
}

function renderClients() {
  const clients = getVisibleClientsForSession().sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'es'));
  clientsBody.replaceChildren();

  if (!clients.length) {
    if (clientsShowMoreBtn) clientsShowMoreBtn.hidden = true;
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 7;
    cell.textContent = 'Sin contactos guardados.';
    row.appendChild(cell);
    clientsBody.appendChild(row);
    return;
  }

  const visibleLimit = Math.min(clientsVisibleLimit, clients.length);
  const visibleClients = clients.slice(0, visibleLimit);

  visibleClients.forEach(client => {
    const row = document.createElement('tr');
    appendCell(row, client.name || '');
    appendCell(row, client.rut || '');
    appendCell(row, client.phone || '');
    appendCell(row, client.email || '');
    appendCell(row, client.address || '');
    appendCell(row, client.imputadoStatus === 'imputado' ? 'Imputado' : 'No imputado');
    const representativeName = [client.representative?.name || '', client.representative?.lastName || ''].join(' ').trim();
    appendCell(row, representativeName ? `${representativeName} (representa a ${client.name || '-'})` : '-');
    clientsBody.appendChild(row);
  });

  if (!clientsShowMoreBtn) return;
  if (visibleLimit >= clients.length) {
    clientsShowMoreBtn.hidden = true;
    return;
  }
  clientsShowMoreBtn.hidden = false;
  const pending = clients.length - visibleLimit;
  const nextBatch = Math.min(CLIENTS_PAGE_SIZE, pending);
  clientsShowMoreBtn.textContent = `Mostrar ${nextBatch} más`;
}

function getLastBookingForClient(clientId, predicate = null) {
  const bookings = getBookings()
    .filter(booking => booking.clientId === clientId)
    .filter(booking => typeof predicate === 'function' ? predicate(booking) : true)
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  return bookings[0] || null;
}

function renderImputadosModule() {
  const clients = getVisibleClientsForSession().sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'es'));
  imputadosBody.replaceChildren();
  noImputadosBody.replaceChildren();
  prisonImputadosBody.replaceChildren();

  if (!clients.length) {
    [imputadosBody, noImputadosBody, prisonImputadosBody].forEach(body => {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 8;
      cell.textContent = 'Sin contactos registrados.';
      row.appendChild(cell);
      body.appendChild(row);
    });
    return;
  }

  const renderMainRow = (client, body) => {
    const latestGeneral = getLastBookingForClient(client.id, booking => !isPrisonVisit(booking));
    const latestPrison = getLastBookingForClient(client.id, booking => isPrisonVisit(booking));
    const targetBooking = latestPrison || latestGeneral;

    const row = document.createElement('tr');
    appendCell(row, client.name || '');
    appendCell(row, client.imputadoStatus === 'imputado' ? 'Imputado' : 'No imputado');
    appendCell(row, client.representative?.name ? `${client.representative.name} (representa a ${client.name || '-'})` : '-');
    appendCell(row, latestGeneral?.hiredLawyer ? 'Sí contrató' : 'No contrató');
    appendCell(row, latestPrison ? 'Sí' : 'No');

    const lawyerCell = document.createElement('td');
    const lawyerSelect = document.createElement('select');
    lawyerSelect.dataset.imputadoLawyer = client.id;
    const firstLawyer = document.createElement('option');
    firstLawyer.value = '';
    firstLawyer.textContent = UNASSIGNED_LAWYER_LABEL;
    lawyerSelect.appendChild(firstLawyer);
    getLawyerNames().forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      lawyerSelect.appendChild(option);
    });
    lawyerSelect.value = targetBooking?.assignedTo || '';
    lawyerCell.appendChild(lawyerSelect);
    row.appendChild(lawyerCell);

    const statusCell = document.createElement('td');
    const statusSelect = document.createElement('select');
    statusSelect.dataset.imputadoStatusBooking = client.id;
    ['nueva', 'confirmada', 'atendida', 'cancelada'].forEach(status => {
      const option = document.createElement('option');
      option.value = status;
      option.textContent = statusLabel(status);
      statusSelect.appendChild(option);
    });
    statusSelect.value = targetBooking?.status || 'nueva';
    statusCell.appendChild(statusSelect);
    row.appendChild(statusCell);

    const actionsCell = document.createElement('td');
    const visitBtn = document.createElement('button');
    visitBtn.className = 'switch-btn';
    visitBtn.type = 'button';
    visitBtn.dataset.imputadoVisit = client.id;
    visitBtn.textContent = 'Agendar visita';
    actionsCell.appendChild(visitBtn);

    const editBtn = document.createElement('button');
    editBtn.className = 'switch-btn';
    editBtn.type = 'button';
    editBtn.dataset.imputadoEdit = client.id;
    editBtn.textContent = 'Editar datos';
    actionsCell.appendChild(editBtn);

    const repBtn = document.createElement('button');
    repBtn.className = 'switch-btn';
    repBtn.type = 'button';
    repBtn.dataset.imputadoRepresentative = client.id;
    repBtn.textContent = 'Agregar representante';
    actionsCell.appendChild(repBtn);

    const okBtn = document.createElement('button');
    okBtn.className = 'switch-btn primary';
    okBtn.type = 'button';
    okBtn.dataset.imputadoOk = client.id;
    okBtn.textContent = 'OK';
    actionsCell.appendChild(okBtn);
    row.appendChild(actionsCell);

    body.appendChild(row);
  };

  clients.forEach(client => {
    if (client.imputadoStatus === 'imputado') {
      renderMainRow(client, imputadosBody);
    } else {
      renderMainRow(client, noImputadosBody);
    }

    if (client.inPrison) {
      const row = document.createElement('tr');
      appendCell(row, client.name || '');
      appendCell(row, client.prisonModule || '-');
      appendCell(row, client.representative?.name ? `${client.representative.name} (representa a ${client.name || '-'})` : '-');

      const selectorCell = document.createElement('td');
      const representativeSelect = document.createElement('select');
      representativeSelect.dataset.prisonRepresentativeSelect = client.id;
      const first = document.createElement('option');
      first.value = '';
      first.textContent = 'Mantener representante actual';
      representativeSelect.appendChild(first);
      clients
        .filter(item => item.id !== client.id)
        .forEach(item => {
          const option = document.createElement('option');
          option.value = item.id;
          option.textContent = `${item.name} · ${item.rut || ''}`;
          representativeSelect.appendChild(option);
        });
      selectorCell.appendChild(representativeSelect);
      row.appendChild(selectorCell);

      const actionCell = document.createElement('td');
      const okBtn = document.createElement('button');
      okBtn.className = 'switch-btn primary';
      okBtn.type = 'button';
      okBtn.dataset.prisonRepresentativeSave = client.id;
      okBtn.textContent = 'OK';
      actionCell.appendChild(okBtn);
      row.appendChild(actionCell);
      prisonImputadosBody.appendChild(row);
    }
  });
}

function renderClientEditOptions() {
  const clients = getVisibleClientsForSession().sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'es'));
  const selected = clientEditSelect.value;
  clientEditSelect.replaceChildren();

  const first = document.createElement('option');
  first.value = '';
  first.textContent = clients.length ? 'Seleccione un contacto' : 'No hay contactos guardados';
  clientEditSelect.appendChild(first);

  clients.forEach(client => {
    const option = document.createElement('option');
    option.value = client.id;
    option.textContent = `${client.name} · ${client.rut}`;
    clientEditSelect.appendChild(option);
  });

  if (clients.some(client => client.id === selected)) {
    clientEditSelect.value = selected;
    fillClientEditForm(selected);
  } else {
    clientEditForm.reset();
    clientEditImputadoStatusInput.value = 'no_imputado';
    updateEditRepresentativeVisibility();
    clientEditAssignedToSelect.value = UNASSIGNED_LAWYER_LABEL;
    clientEditAssignedToSelect.disabled = true;
    if (deleteClientBtn) deleteClientBtn.disabled = true;
  }
}

function fillClientEditForm(clientId) {
  const client = getVisibleClientsForSession().find(item => item.id === clientId);
  if (!client) {
    clientEditForm.reset();
    clientEditImputadoStatusInput.value = 'no_imputado';
    updateEditRepresentativeVisibility();
    if (deleteClientBtn) deleteClientBtn.disabled = true;
    return;
  }

  clientEditForm.elements.name.value = client.name || '';
  clientEditForm.elements.rut.value = client.rut || '';
  clientEditForm.elements.phone.value = client.phone || '';
  clientEditForm.elements.email.value = client.email || '';
  clientEditForm.elements.address.value = client.address || '';
  clientEditImputadoStatusInput.value = client.imputadoStatus === 'imputado' ? 'imputado' : 'no_imputado';
  clientEditInPrisonInput.value = client.inPrison ? 'si' : 'no';
  const representative = typeof client.representative === 'object' && client.representative
    ? client.representative
    : { name: String(client.representative || '').trim(), lastName: '', rut: '', phone: '', email: '', modulo: '', address: '' };
  applyRepresentativeToInputs({
    name: clientEditRepresentativeNameInput,
    lastName: clientEditRepresentativeLastNameInput,
    rut: clientEditRepresentativeRutInput,
    phone: clientEditRepresentativePhoneInput,
    email: clientEditRepresentativeEmailInput,
    modulo: clientEditRepresentativeModuloInput,
    address: clientEditRepresentativeAddressInput
  }, representative);
  updateEditRepresentativeVisibility();

  const clientBookings = getBookings().filter(booking => booking.clientId === clientId);
  const hiredBooking = clientBookings.find(booking => booking.hiredLawyer);
  clientEditHiredLaterInput.checked = Boolean(hiredBooking);
  clientEditAssignedToSelect.value = hiredBooking?.assignedTo || UNASSIGNED_LAWYER_LABEL;
  clientEditAssignedToSelect.disabled = !clientEditHiredLaterInput.checked;
  if (deleteClientBtn) deleteClientBtn.disabled = false;
}

function getLawyerStats(lawyerName) {
  const stats = { total: 0, nueva: 0, confirmada: 0, atendida: 0, cancelada: 0 };

  getBookings().forEach(booking => {
    if ((booking.assignedTo || '').trim() !== lawyerName) return;
    stats.total += 1;
    if (Object.hasOwn(stats, booking.status)) {
      stats[booking.status] += 1;
    }
  });

  return stats;
}

function monthValueFromDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function getLawyerColor(name) {
  const clean = String(name || '').trim();
  if (!clean) return LAWYER_COLORS[0];
  const index = [...clean].reduce((sum, char) => sum + char.charCodeAt(0), 0) % LAWYER_COLORS.length;
  return LAWYER_COLORS[index];
}

function getCalendarBookings(selectedLawyer, selectedMonth, onlyShared = false, predicate = null) {
  const allBookings = getBookings().filter(booking => booking.hiredLawyer && booking.status !== 'cancelada' && booking.date);
  const filteredBookings = typeof predicate === 'function' ? allBookings.filter(predicate) : allBookings;
  const byMonth = filteredBookings.filter(booking => !selectedMonth || booking.date.slice(0, 7) === selectedMonth);
  const byLawyer = byMonth.filter(booking => !selectedLawyer || booking.assignedTo === selectedLawyer);

  if (!onlyShared) return byLawyer;

  const slotMap = new Map();
  byMonth.forEach(booking => {
    const slot = `${booking.date}|${booking.time || ''}`;
    if (!slotMap.has(slot)) slotMap.set(slot, new Set());
    slotMap.get(slot).add((booking.assignedTo || '').trim());
  });

  return byLawyer.filter(booking => {
    const slot = `${booking.date}|${booking.time || ''}`;
    return (slotMap.get(slot) || new Set()).size > 1;
  });
}

function renderCalendarLegend(container, lawyerNames) {
  container.replaceChildren();
  if (!lawyerNames.length) return;

  lawyerNames.forEach(name => {
    const item = document.createElement('span');
    item.className = 'legend-item';

    const dot = document.createElement('span');
    dot.className = 'legend-dot';
    dot.style.backgroundColor = getLawyerColor(name);
    item.appendChild(dot);

    const text = document.createElement('span');
    text.textContent = name;
    item.appendChild(text);

    container.appendChild(item);
  });
}

function renderCalendar(container, bookings, selectedMonth) {
  const monthValue = selectedMonth || monthValueFromDate(new Date());
  const [yearStr, monthStr] = monthValue.split('-');
  const year = Number(yearStr);
  const month = Number(monthStr);

  container.replaceChildren();

  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  weekDays.forEach(day => {
    const head = document.createElement('div');
    head.className = 'calendar-head';
    head.textContent = day;
    container.appendChild(head);
  });

  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
    const empty = document.createElement('p');
    empty.className = 'calendar-empty';
    empty.textContent = 'Selecciona un mes válido.';
    container.appendChild(empty);
    return;
  }

  const firstDay = new Date(year, month - 1, 1);
  const lastDayDate = new Date(year, month, 0).getDate();
  const firstWeekDay = (firstDay.getDay() + 6) % 7;
  const totalCells = Math.ceil((firstWeekDay + lastDayDate) / 7) * 7;

  const bookingsByDate = new Map();
  bookings.forEach(booking => {
    if (!bookingsByDate.has(booking.date)) bookingsByDate.set(booking.date, []);
    bookingsByDate.get(booking.date).push(booking);
  });

  for (let cell = 0; cell < totalCells; cell += 1) {
    const dayNumber = cell - firstWeekDay + 1;
    const inMonth = dayNumber >= 1 && dayNumber <= lastDayDate;
    const dayCell = document.createElement('div');
    dayCell.className = `calendar-day${inMonth ? '' : ' muted'}`;

    if (inMonth) {
      const dayLabel = document.createElement('div');
      dayLabel.className = 'day-number';
      dayLabel.textContent = String(dayNumber);
      dayCell.appendChild(dayLabel);

      const dateKey = `${yearStr}-${String(month).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`;
      dayCell.dataset.date = dateKey;
      dayCell.addEventListener('dragover', event => {
        event.preventDefault();
        dayCell.classList.add('drag-over');
      });
      dayCell.addEventListener('dragleave', () => {
        dayCell.classList.remove('drag-over');
      });
      dayCell.addEventListener('drop', event => {
        event.preventDefault();
        dayCell.classList.remove('drag-over');
        const bookingId = event.dataTransfer?.getData('text/booking-id');
        if (bookingId) moveBookingDate(bookingId, dateKey);
      });

      const dayBookings = bookingsByDate.get(dateKey) || [];
      dayBookings
        .sort((a, b) => `${a.time || ''}`.localeCompare(`${b.time || ''}`))
        .forEach(booking => {
          const event = document.createElement('div');
          event.className = 'calendar-event';
          event.draggable = true;
          event.dataset.bookingId = booking.id;
          event.addEventListener('dragstart', dragEvent => {
            dragEvent.dataTransfer?.setData('text/booking-id', booking.id);
          });
          event.style.setProperty('--event-color', getLawyerColor(booking.assignedTo));
          event.textContent = `${booking.time || '--:--'} · ${booking.assignedTo || 'Sin abogada'} · ${booking.customer || 'Cliente'} · ${normalizeMatterLabel(booking.matter) || 'General'}`;
          dayCell.appendChild(event);
        });
    }

    container.appendChild(dayCell);
  }
}

function renderAgendaCalendar() {
  const selectedLawyer = lawyerFilter.value.trim();
  const selectedMonth = agendaMonthInput.value;
  const bookings = getCalendarBookings(selectedLawyer, selectedMonth, false, booking => !isPrisonVisit(booking));
  const names = [...new Set(bookings.map(booking => booking.assignedTo).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es'));
  renderCalendarLegend(agendaLegend, names);
  renderCalendar(agendaCalendar, bookings, selectedMonth);
}

function renderLawyerCalendar() {
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const selectedLawyer = role === 'Abogada' && sessionLawyer ? sessionLawyer : lawyerCalendarFilter.value.trim();
  const selectedMonth = lawyerCalendarMonth.value;
  const onlyShared = role === 'Abogada' ? false : Boolean(sharedOnlyInput.checked);
  const bookings = getCalendarBookings(selectedLawyer, selectedMonth, onlyShared);
  const names = [...new Set(bookings.map(booking => booking.assignedTo).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es'));
  renderCalendarLegend(lawyerCalendarLegend, names);
  renderCalendar(lawyerCalendar, bookings, selectedMonth);
}

function getGeneralStatusStats() {
  const stats = { nueva: 0, confirmada: 0, atendida: 0, cancelada: 0 };
  getBookings().forEach(booking => {
    if (Object.hasOwn(stats, booking.status)) stats[booking.status] += 1;
  });
  return stats;
}

function getLawyerAttentionStats() {
  const map = new Map();
  getBookings().forEach(booking => {
    const name = (booking.assignedTo || 'Sin abogada').trim() || 'Sin abogada';
    if (!map.has(name)) map.set(name, { total: 0, atendida: 0 });
    const item = map.get(name);
    item.total += 1;
    if (booking.status === 'atendida') item.atendida += 1;
  });

  return [...map.entries()]
    .map(([lawyer, values]) => ({ lawyer, ...values }))
    .sort((a, b) => a.lawyer.localeCompare(b.lawyer, 'es'));
}

function getPrisonVisitStats() {
  const map = new Map();
  getBookings()
    .filter(booking => isPrisonVisit(booking) && booking.prisonAttendance === 'asistio')
    .forEach(booking => {
      const lawyer = (booking.assignedTo || 'Sin abogada').trim() || 'Sin abogada';
      if (!map.has(lawyer)) map.set(lawyer, 0);
      map.set(lawyer, map.get(lawyer) + 1);
    });
  return [...map.entries()].map(([lawyer, total]) => ({ lawyer, total }));
}

function getRankingTone(total) {
  if (total >= 4) return 'high';
  if (total >= 2) return 'mid';
  return 'low';
}

function renderPrisonLawyerRankingCard() {
  if (!(prisonLawyerRankingCard instanceof HTMLElement)) return;
  prisonLawyerRankingCard.replaceChildren();

  const ranking = getPrisonVisitStats()
    .sort((a, b) => b.total - a.total || a.lawyer.localeCompare(b.lawyer, 'es'))
    .slice(0, 10);

  if (!ranking.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'Sin visitas a la cárcel para mostrar ranking.';
    prisonLawyerRankingCard.appendChild(empty);
    return;
  }

  const maxTotal = Math.max(...ranking.map(item => item.total), 1);
  ranking.forEach((item, index) => {
    const tone = getRankingTone(item.total);
    const row = document.createElement('div');
    row.className = 'ranking-row';

    const position = document.createElement('div');
    position.className = `ranking-position ${tone === 'low' ? 'low' : ''}`.trim();
    position.textContent = String(index + 1);
    row.appendChild(position);

    const main = document.createElement('div');
    main.className = 'ranking-main';
    const name = document.createElement('div');
    name.className = 'ranking-name';
    name.textContent = item.lawyer;
    main.appendChild(name);

    const track = document.createElement('div');
    track.className = 'ranking-track';
    const fill = document.createElement('div');
    fill.className = `ranking-fill ${tone}`;
    fill.style.width = `${(item.total / maxTotal) * 100}%`;
    track.appendChild(fill);
    main.appendChild(track);
    row.appendChild(main);

    const badge = document.createElement('div');
    badge.className = `ranking-badge ${tone}`;
    badge.textContent = String(item.total);
    row.appendChild(badge);

    prisonLawyerRankingCard.appendChild(row);
  });
}

function getLawyerRankingStats() {
  return getLawyerAttentionStats()
    .map(item => ({
      lawyer: item.lawyer,
      total: item.total,
      attended: item.atendida,
      conversion: item.total ? Math.round((item.atendida / item.total) * 100) : 0
    }))
    .sort((a, b) => {
      if (b.attended !== a.attended) return b.attended - a.attended;
      if (b.total !== a.total) return b.total - a.total;
      return a.lawyer.localeCompare(b.lawyer, 'es');
    });
}

function getPrisonPersonStats(selectedLawyer = '') {
  const map = new Map();
  getBookings()
    .filter(booking => isPrisonVisit(booking) && booking.prisonAttendance === 'asistio')
    .filter(booking => !selectedLawyer || (booking.assignedTo || '').trim() === selectedLawyer)
    .forEach(booking => {
      const key = `${booking.customer || 'Sin nombre'}|${booking.rut || '-'}`;
      if (!map.has(key)) map.set(key, 0);
      map.set(key, map.get(key) + 1);
    });
  return [...map.entries()]
    .map(([key, total]) => ({ label: key.replace('|', ' · RUT '), total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 12);
}

function getAttentionPerformanceColor(attended) {
  const value = Number(attended) || 0;
  if (value <= 2) return '#d63a55';
  if (value <= 3) return '#e9c46a';
  return '#2a9d8f';
}

function getVisitRangeColor(total) {
  if (total <= 1) return '#e63946';
  if (total <= 3) return '#f4a261';
  return '#2a9d8f';
}

function drawBarChart(canvas, labels, values, colors, title) {
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const padLeft = 52;
  const padRight = 16;
  const padTop = 36;
  const padBottom = 46;
  const chartWidth = width - padLeft - padRight;
  const chartHeight = height - padTop - padBottom;
  const maxValue = Math.max(1, ...values);

  ctx.fillStyle = '#5a313d';
  ctx.font = 'bold 14px Arial';
  ctx.fillText(title, padLeft, 20);

  ctx.strokeStyle = '#d9c8ce';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padLeft, padTop);
  ctx.lineTo(padLeft, padTop + chartHeight);
  ctx.lineTo(padLeft + chartWidth, padTop + chartHeight);
  ctx.stroke();

  const barSpace = chartWidth / Math.max(labels.length, 1);
  const barWidth = Math.max(16, barSpace * 0.55);

  values.forEach((value, index) => {
    const barHeight = (value / maxValue) * (chartHeight - 8);
    const x = padLeft + index * barSpace + (barSpace - barWidth) / 2;
    const y = padTop + chartHeight - barHeight;

    ctx.fillStyle = colors[index] || '#8f203a';
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = '#2f1a21';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(String(value), x + barWidth / 2, y - 6);

    ctx.fillStyle = '#5a313d';
    const label = labels[index].length > 16 ? `${labels[index].slice(0, 16)}…` : labels[index];
    ctx.fillText(label, x + barWidth / 2, padTop + chartHeight + 18);
    ctx.textAlign = 'start';
  });
}

function drawRankingChart(canvas, ranking) {
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const topItems = ranking.slice(0, 6);
  const labels = topItems.map(item => item.lawyer);
  const values = topItems.map(item => item.attended);
  const maxValue = Math.max(1, ...values);

  const padLeft = 180;
  const padRight = 24;
  const padTop = 40;
  const padBottom = 24;
  const chartWidth = width - padLeft - padRight;
  const rowHeight = 40;

  ctx.fillStyle = '#5a313d';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Ranking (atendidas) por abogada', padLeft, 22);

  if (!topItems.length) {
    ctx.font = '13px Arial';
    ctx.fillText('Sin datos para construir ranking.', padLeft, padTop + 30);
    return;
  }

  topItems.forEach((item, index) => {
    const y = padTop + index * rowHeight;
    const barHeight = 22;
    const barWidth = (item.attended / maxValue) * chartWidth;
    const color = getAttentionPerformanceColor(item.attended);
    const rank = index + 1;
    const shortName = item.lawyer.length > 22 ? `${item.lawyer.slice(0, 22)}…` : item.lawyer;

    ctx.fillStyle = '#5a313d';
    ctx.font = '12px Arial';
    ctx.fillText(`${rank}. ${shortName}`, 14, y + 16);

    ctx.fillStyle = '#f3e4e9';
    ctx.fillRect(padLeft, y, chartWidth, barHeight);

    ctx.fillStyle = color;
    ctx.fillRect(padLeft, y, Math.max(4, barWidth), barHeight);

    ctx.fillStyle = '#2f1a21';
    ctx.fillText(`${item.attended} atendidas · ${item.conversion}% conversión`, padLeft + 8, y + 16);
  });
}

function drawHorizontalBarChart(canvas, labels, values, colors, title) {
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const padLeft = 220;
  const padRight = 30;
  const padTop = 34;
  const padBottom = 26;
  const chartWidth = width - padLeft - padRight;
  const rowHeight = 28;
  const gap = 16;
  const maxValue = Math.max(...values, 1);

  ctx.fillStyle = '#4d1930';
  ctx.font = 'bold 18px Arial';
  ctx.fillText(title, 12, 22);

  labels.forEach((label, index) => {
    const y = padTop + (rowHeight + gap) * index;
    const value = values[index] || 0;
    const barWidth = (value / maxValue) * chartWidth;

    ctx.fillStyle = '#f7eef1';
    ctx.fillRect(padLeft, y, chartWidth, rowHeight);

    ctx.fillStyle = colors[index] || '#8f203a';
    ctx.fillRect(padLeft, y, barWidth, rowHeight);

    ctx.fillStyle = '#4d1930';
    ctx.font = '13px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, padLeft - 10, y + rowHeight / 2);

    ctx.textAlign = 'left';
    ctx.fillText(String(value), padLeft + barWidth + 8, y + rowHeight / 2);
  });
}

function downloadCsv(filename, rows) {
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
}

function downloadJson(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
}

function createBackupPayload() {
  return {
    exportedAt: new Date().toISOString(),
    version: 1,
    clients: getClients(),
    bookings: getBookings(),
    lawyers: getLawyers(),
    profiles: getProfiles()
  };
}


function restoreBackupPayload(payload) {
  if (!payload || typeof payload !== 'object') throw new Error('Formato inválido');
  if (!Array.isArray(payload.bookings) || !Array.isArray(payload.lawyers) || !Array.isArray(payload.profiles)) {
    throw new Error('El respaldo no contiene la estructura esperada');
  }

  const backupClients = Array.isArray(payload.clients) ? payload.clients : [];
  const inferredClients = payload.bookings.map(booking => ({
    id: booking.clientId || crypto.randomUUID(),
    name: booking.customer || 'Cliente',
    rut: booking.rut || '',
    phone: booking.phone || '',
    email: booking.email || '',
    address: booking.address || '',
    createdAt: booking.createdAt || new Date().toISOString()
  }));
  const mergedByRut = new Map();
  [...backupClients, ...inferredClients].forEach(client => {
    const key = String(client.rut || client.id || '').trim();
    if (!key) return;
    if (!mergedByRut.has(key)) mergedByRut.set(key, client);
  });

  saveClients([...mergedByRut.values()]);
  saveBookings(payload.bookings);
  saveLawyers(payload.lawyers);
  saveProfiles(payload.profiles);
  syncLawyerAndProfileUsers();
  renderAll();
}

function renderReports() {
  renderPrisonLawyerRankingCard();

  const lawyerStats = getLawyerAttentionStats();
  const lawyerLabels = lawyerStats.map(item => item.lawyer);
  const lawyerValues = lawyerStats.map(item => item.atendida);
  const lawyerColors = lawyerStats.map(item => getAttentionPerformanceColor(item.atendida));
  drawBarChart(lawyerStatsChart, lawyerLabels, lawyerValues, lawyerColors, 'Atenciones (estado atendida) por abogada');

  const prisonStats = getPrisonVisitStats().sort((a, b) => b.total - a.total);
  drawHorizontalBarChart(
    prisonStatsChart,
    prisonStats.map(item => item.lawyer),
    prisonStats.map(item => item.total),
    prisonStats.map(item => getVisitRangeColor(item.total)),
    'Visitas a la cárcel por abogada'
  );

  const ranking = getLawyerRankingStats();
  drawHorizontalBarChart(
    lawyerRankingChart,
    ranking.map(item => item.lawyer),
    ranking.map(item => item.attended),
    ranking.map(item => getVisitRangeColor(item.attended)),
    'Ranking por atenciones (abogadas)'
  );

  const selectedLawyer = String(reportLawyerFilter.value || '').trim();
  const personStats = getPrisonPersonStats(selectedLawyer);
  drawHorizontalBarChart(
    prisonPersonChart,
    personStats.map(item => item.label),
    personStats.map(item => item.total),
    personStats.map(item => getVisitRangeColor(item.total)),
    selectedLawyer
      ? `Internas visitadas por ${selectedLawyer}`
      : 'Internas visitadas (todas las abogadas)'
  );
}

function renderBookings() {
  const allBookings = getVisibleBookingsForSession(getBookings());
  const bookings = allBookings.filter(booking => !booking.hiredLawyer && !isPrisonVisit(booking));
  const hiredBookings = allBookings.filter(booking => booking.hiredLawyer && !isPrisonVisit(booking));
  bookingsBody.replaceChildren();
  hiredBody.replaceChildren();

  if (!bookings.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 10;
    cell.textContent = 'Sin leads registrados';
    row.appendChild(cell);
    bookingsBody.appendChild(row);
  } else {
    bookings.forEach(booking => {
      const row = document.createElement('tr');

      appendCell(row, fmtDate(booking.createdAt));
      appendCell(row, booking.customer || '');
      appendCell(row, getBookingRepresentative(booking) || '-');
      appendCell(row, normalizeMatterLabel(booking.matter) || 'General');
      appendCell(row, booking.phone || '');
      appendCell(row, formatAppointment(booking));

      appendCell(row, booking.assignedTo || 'Sin abogada');

      const statusCell = document.createElement('td');
      const statusBadge = document.createElement('span');
      statusBadge.className = `badge ${booking.status}`;
      statusBadge.textContent = statusLabel(booking.status);
      statusCell.appendChild(statusBadge);
      row.appendChild(statusCell);

      const actionsCell = document.createElement('td');

      const convertSelect = document.createElement('select');
      convertSelect.dataset.convertLawyer = booking.id;
      const first = document.createElement('option');
      first.value = UNASSIGNED_LAWYER_LABEL;
      first.textContent = UNASSIGNED_LAWYER_LABEL;
      convertSelect.appendChild(first);
      getLawyerNames().forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        convertSelect.appendChild(option);
      });
      convertSelect.value = booking.assignedTo || UNASSIGNED_LAWYER_LABEL;
      actionsCell.appendChild(convertSelect);

      const convertBtn = document.createElement('button');
      convertBtn.className = 'switch-btn primary';
      convertBtn.dataset.convertBtn = booking.id;
      convertBtn.textContent = 'Contrató';
      actionsCell.appendChild(convertBtn);

      const keepLeadBtn = document.createElement('button');
      keepLeadBtn.className = 'switch-btn';
      keepLeadBtn.dataset.keepLeadBtn = booking.id;
      keepLeadBtn.textContent = 'No contrató';
      actionsCell.appendChild(keepLeadBtn);

      row.appendChild(actionsCell);

      const notifyCell = document.createElement('td');
      const waBtn = document.createElement('button');
      waBtn.className = 'switch-btn primary';
      waBtn.dataset.remarketWhatsapp = booking.id;
      waBtn.textContent = 'Remarketing WhatsApp';
      notifyCell.appendChild(waBtn);
      const emailBtn = document.createElement('button');
      emailBtn.className = 'switch-btn';
      emailBtn.dataset.remarketEmail = booking.id;
      emailBtn.textContent = 'Remarketing Email';
      notifyCell.appendChild(emailBtn);
      row.appendChild(notifyCell);

      bookingsBody.appendChild(row);
    });
  }

  if (!hiredBookings.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 8;
    cell.textContent = 'Sin contactos contratados para remarketing';
    row.appendChild(cell);
    hiredBody.appendChild(row);
  } else {
    hiredBookings.forEach(booking => {
      const row = document.createElement('tr');

    appendCell(row, fmtDate(booking.createdAt));
    appendCell(row, booking.customer || '');
    appendCell(row, normalizeMatterLabel(booking.matter) || 'General');
    appendCell(row, booking.phone || '');
    appendCell(row, formatAppointment(booking));
    appendCell(row, booking.assignedTo || 'Sin abogada');

    const statusCell = document.createElement('td');
    const statusBadge = document.createElement('span');
    statusBadge.className = `badge ${booking.status}`;
    statusBadge.textContent = statusLabel(booking.status);
    statusCell.appendChild(statusBadge);
    row.appendChild(statusCell);

    const actionCell = document.createElement('td');
    const toLeadBtn = document.createElement('button');
    toLeadBtn.className = 'switch-btn';
    toLeadBtn.dataset.toLeadBtn = booking.id;
    toLeadBtn.textContent = 'Pasar a no contratado';
    actionCell.appendChild(toLeadBtn);
    row.appendChild(actionCell);

      hiredBody.appendChild(row);
    });
  }

  bookingsBody.querySelectorAll('[data-convert-btn]').forEach(btn => {
    btn.onclick = () => {
      const lawyerSelect = bookingsBody.querySelector(`[data-convert-lawyer="${btn.dataset.convertBtn}"]`);
      const lawyer = normalizeAssignedToValue(lawyerSelect?.value);
      updateBooking(btn.dataset.convertBtn, booking => {
        booking.hiredLawyer = true;
        booking.assignedTo = lawyer;
        booking.status = 'confirmada';
      });
    };
  });

  bookingsBody.querySelectorAll('[data-convert-lawyer]').forEach(select => {
    select.onchange = () => updateBooking(select.dataset.convertLawyer, booking => {
      booking.assignedTo = normalizeAssignedToValue(select.value);
    });
  });

  bookingsBody.querySelectorAll('[data-keep-lead-btn]').forEach(btn => {
    btn.onclick = () => updateBooking(btn.dataset.keepLeadBtn, booking => {
      booking.hiredLawyer = false;
      booking.status = booking.status === 'atendida' ? 'nueva' : booking.status;
    });
  });

  hiredBody.querySelectorAll('[data-to-lead-btn]').forEach(btn => {
    btn.onclick = () => updateBooking(btn.dataset.toLeadBtn, booking => {
      booking.hiredLawyer = false;
      booking.status = 'nueva';
    });
  });

  bookingsBody.querySelectorAll('[data-remarket-whatsapp]').forEach(btn => {
    btn.onclick = async () => {
      const booking = getBookings().find(item => item.id === btn.dataset.remarketWhatsapp);
      if (!booking) return;
      const msg = `TACAM: Hola ${booking.customer || 'cliente'}, tenemos nuevas opciones legales para tu caso. ¿Te gustaría una nueva reunión?`;
      await notifyBookingChannels(booking, msg, 'TACAM: campaña de seguimiento');
    };
  });

  bookingsBody.querySelectorAll('[data-remarket-email]').forEach(btn => {
    btn.onclick = async () => {
      const booking = getBookings().find(item => item.id === btn.dataset.remarketEmail);
      if (!booking) return;
      const msg = `TACAM: seguimiento de tu caso. Tenemos novedades y opciones de apoyo legal para ${normalizeMatterLabel(booking.matter) || 'tu consulta'}.`;
      await sendEmailViaBrevo(booking, 'TACAM: seguimiento y remarketing', msg);
    };
  });
}

function renderAgenda() {
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const selectedLawyer = role === 'Abogada' && sessionLawyer ? sessionLawyer : lawyerFilter.value.trim();
  const bookings = getVisibleBookingsForSession(getBookings()).filter(booking =>
    booking.hiredLawyer && booking.status !== 'cancelada' && !isPrisonVisit(booking) && (!selectedLawyer || booking.assignedTo === selectedLawyer)
  );
  if (role === 'Abogada' && sessionLawyer && lawyerFilter) lawyerFilter.value = sessionLawyer;

  agendaBody.replaceChildren();

  if (!bookings.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 6;
    cell.textContent = 'Sin citas para mostrar';
    row.appendChild(cell);
    agendaBody.appendChild(row);
  } else {
    bookings.forEach(booking => {
      const row = document.createElement('tr');
      appendCell(row, booking.customer || '');
      appendCell(row, normalizeMatterLabel(booking.matter) || 'General');
      appendCell(row, formatAppointment(booking));
      appendCell(row, booking.notes || '-');

      const statusCell = document.createElement('td');
      const statusBadge = document.createElement('span');
      statusBadge.className = `badge ${booking.status}`;
      statusBadge.textContent = statusLabel(booking.status);
      statusCell.appendChild(statusBadge);
      row.appendChild(statusCell);

      const actionCell = document.createElement('td');
      const lawyerSelect = document.createElement('select');
      lawyerSelect.dataset.agendaLawyer = booking.id;
      const firstLawyer = document.createElement('option');
      firstLawyer.value = UNASSIGNED_LAWYER_LABEL;
      firstLawyer.textContent = UNASSIGNED_LAWYER_LABEL;
      lawyerSelect.appendChild(firstLawyer);
      getLawyerNames().forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        lawyerSelect.appendChild(option);
      });
      lawyerSelect.value = booking.assignedTo || UNASSIGNED_LAWYER_LABEL;
      actionCell.appendChild(lawyerSelect);

      const attendedBtn = document.createElement('button');
      attendedBtn.className = 'switch-btn primary';
      attendedBtn.dataset.attendYes = booking.id;
      attendedBtn.textContent = 'Sí contrató servicio';
      actionCell.appendChild(attendedBtn);

      const missedBtn = document.createElement('button');
      missedBtn.className = 'switch-btn';
      missedBtn.dataset.attendNo = booking.id;
      missedBtn.textContent = 'No contrató servicio';
      actionCell.appendChild(missedBtn);
      row.appendChild(actionCell);

      agendaBody.appendChild(row);
    });
  }

  agendaBody.querySelectorAll('[data-attend-yes]').forEach(btn => {
    btn.onclick = () => updateBooking(btn.dataset.attendYes, booking => {
      booking.status = 'atendida';
      booking.hiredLawyer = true;
    });
  });

  agendaBody.querySelectorAll('[data-attend-no]').forEach(btn => {
    btn.onclick = () => updateBooking(btn.dataset.attendNo, booking => {
      booking.status = 'nueva';
      booking.hiredLawyer = false;
      booking.assignedTo = '';
    });
  });

  agendaBody.querySelectorAll('[data-agenda-lawyer]').forEach(select => {
    select.onchange = () => updateBooking(select.dataset.agendaLawyer, booking => {
      booking.assignedTo = normalizeAssignedToValue(select.value);
    });
  });
}


function buildPrisonCheckInMessage(booking) {
  return `TACAM: check-in asistente registrado para la visita a la cárcel de ${booking.customer || 'Cliente'}. Fecha/Hora: ${booking.date || '-'} ${booking.time || ''}. Abogada: ${booking.assignedTo || 'Por confirmar'}.`;
}

function getFilteredPrisonVisitsForReport() {
  const selectedMonth = prisonMonthInput.value;
  const selectedLawyer = String(prisonLawyerFilter.value || '').trim();
  return getBookings()
    .filter(booking => booking.hiredLawyer && booking.status !== 'cancelada' && isPrisonVisit(booking))
    .filter(booking => !selectedLawyer || booking.assignedTo === selectedLawyer)
    .filter(booking => !selectedMonth || booking.date.slice(0, 7) === selectedMonth)
    .sort((a, b) => `${a.date || ''} ${a.time || ''}`.localeCompare(`${b.date || ''} ${b.time || ''}`));
}

function getTomorrowDateString() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
}

function getTomorrowPrisonVisitsForGendarmeria(filterValue = '') {
  const tomorrow = getTomorrowDateString();
  return getVisibleBookingsForSession(getBookings())
    .filter(booking => booking.hiredLawyer && booking.status !== 'cancelada' && isPrisonVisit(booking))
    .filter(booking => booking.date === tomorrow)
    .filter(booking => !filterValue || booking.assignedTo === filterValue)
    .sort((a, b) => `${a.date || ''} ${a.time || ''}`.localeCompare(`${b.date || ''} ${b.time || ''}`, 'es'));
}

function buildGendarmeriaListMessage(visits) {
  const titleMonth = prisonMonthInput.value || monthValueFromDate(new Date());
  const header = [
    `FICHA VISITA INTERNO - ${titleMonth}`,
    '',
    'NOMBRE INTERNO | FECHA | HORA | MÓDULO | TIEMPO VISITA | ABOGADA'
  ];
  const rows = visits.map((booking, index) => {
    const modulo = booking.prisonModule || booking.representative?.modulo || '-';
    const visitTime = booking.notes ? String(booking.notes).slice(0, 40) : '30 minutos';
    return `${index + 1}. ${booking.customer || '-'} | ${booking.date || '-'} | ${booking.time || '--:--'} | ${modulo} | ${visitTime} | ${booking.assignedTo || 'Sin asignar'} (RUT: ${booking.rut || '-'})`;
  });
  return [...header, ...rows, '', 'TACAM - Sistema de Reservas'].join('\n');
}

function buildGendarmeriaTemplateData(visits) {
  const safeVisits = Array.isArray(visits) ? visits.slice(0, 5) : [];
  const folioBase = Date.now().toString().slice(-8);
  return {
    fechaHoy: String(safeVisits[0]?.date || getTomorrowDateString()),
    totalVisitas: String(Array.isArray(visits) ? visits.length : 0),
    folioDocumento: `TAC-${folioBase}`,
    abogadaFirma: '',
    visits: safeVisits.map((booking, index) => ({
      numero: index + 1,
      hora: String(booking?.time || '--:--'),
      nombre: String(booking?.customer || '-'),
      rut: String(booking?.rut || '-')
    }))
  };
}

function getGendarmeriaRecipients() {
  return [...GENDARMERIA_RECIPIENTS];
}

async function sendGendarmeriaRoster(visits, subject, options = {}) {
  const { silentMissingRecipients = false } = options;
  const recipients = getGendarmeriaRecipients();
  if (!recipients.length) {
    if (!silentMissingRecipients) showToast('Ingresa al menos un correo de Gendarmería.');
    return false;
  }
  const textContent = buildGendarmeriaListMessage(visits);
  const lawyerEmails = [...new Set(visits
    .map(booking => {
      const lawyer = getLawyers().find(item => (item.name || '').trim() === (booking.assignedTo || '').trim());
      return String(lawyer?.email || '').trim();
    })
    .filter(Boolean))];
  const allRecipients = [...new Set([...recipients, ...GENDARMERIA_CC_RECIPIENTS, ...lawyerEmails])];
  try {
    for (const toEmail of allRecipients) {
      const response = await fetch('brevo-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toEmail,
          toName: 'Gendarmería',
          subject,
          textContent,
          templateType: 'gendarmeria_roster',
          templateData: buildGendarmeriaTemplateData(visits)
        })
      });
      if (!response.ok) throw new Error(await response.text());
    }
    return true;
  } catch (error) {
    console.error('No se pudo enviar nómina a Gendarmería', error);
    return false;
  }
}

function renderGendarmeriaVisitOptions() {
  if (!gendarmeriaVisitSelect) return;
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const filterValue = role === 'Abogada' && sessionLawyer ? sessionLawyer : String(prisonLawyerFilter.value || '').trim();
  const visits = getTomorrowPrisonVisitsForGendarmeria(filterValue);

  const previousValues = new Set(Array.from(gendarmeriaVisitSelect.selectedOptions || []).map(option => option.value));
  gendarmeriaVisitSelect.replaceChildren();

  visits.forEach(booking => {
    const option = document.createElement('option');
    option.value = booking.id;
    const modulo = booking.prisonModule || booking.representative?.modulo || '-';
    option.textContent = `${booking.date || '-'} ${booking.time || '--:--'} · ${booking.customer || 'Sin nombre'} · módulo ${modulo}`;
    if (previousValues.has(booking.id)) option.selected = true;
    gendarmeriaVisitSelect.appendChild(option);
  });

  if (!previousValues.size) {
    Array.from(gendarmeriaVisitSelect.options).forEach(option => {
      option.selected = true;
    });
  }
}

function renderPrisonCalendar() {
  const selectedMonth = prisonMonthInput.value;
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const selectedLawyer = role === 'Abogada' && sessionLawyer ? sessionLawyer : String(prisonLawyerFilter.value || '').trim();
  if (role === 'Abogada' && sessionLawyer) prisonLawyerFilter.value = sessionLawyer;
  const bookings = getCalendarBookings(selectedLawyer, selectedMonth, false, booking => isPrisonVisit(booking));
  const names = [...new Set(bookings.map(booking => booking.assignedTo).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es'));
  renderCalendarLegend(prisonCalendarLegend, names);
  renderCalendar(prisonCalendar, bookings, selectedMonth);
}

function renderPrisonVisitsList() {
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const filterValue = role === 'Abogada' && sessionLawyer ? sessionLawyer : String(prisonLawyerFilter.value || '').trim();
  if (role === 'Abogada' && sessionLawyer) prisonLawyerFilter.value = sessionLawyer;
  const visits = getFilteredPrisonVisitsForReport().filter(booking => !filterValue || booking.assignedTo === filterValue);

  renderGendarmeriaVisitOptions();
  prisonVisitsBody.replaceChildren();

  if (!visits.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 8;
    cell.textContent = 'Sin contactos visitados en este mes.';
    row.appendChild(cell);
    prisonVisitsBody.appendChild(row);
    return;
  }

  visits.forEach(booking => {
    const row = document.createElement('tr');
    const lawyerCell = document.createElement('td');
    const lawyerSelect = document.createElement('select');
    lawyerSelect.dataset.prisonLawyer = booking.id;
    const lawyerNames = getLawyerNames();
    const emptyOption = document.createElement('option');
    emptyOption.value = UNASSIGNED_LAWYER_LABEL;
    emptyOption.textContent = UNASSIGNED_LAWYER_LABEL;
    lawyerSelect.appendChild(emptyOption);
    lawyerNames.forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      lawyerSelect.appendChild(option);
    });
    lawyerSelect.value = booking.assignedTo || UNASSIGNED_LAWYER_LABEL;
    lawyerCell.appendChild(lawyerSelect);
    row.appendChild(lawyerCell);
    appendCell(row, booking.customer || '');
    appendCell(row, booking.date || '-');
    appendCell(row, booking.time || '--:--');

    const statusCell = document.createElement('td');
    const statusBadge = document.createElement('span');
    statusBadge.className = `badge ${booking.status}`;
    statusBadge.textContent = statusLabel(booking.status);
    statusCell.appendChild(statusBadge);
    row.appendChild(statusCell);

    const attendanceCell = document.createElement('td');
    const yesBtn = document.createElement('button');
    yesBtn.className = `switch-btn ${booking.prisonAttendance === 'asistio' ? 'primary' : ''}`.trim();
    yesBtn.dataset.prisonAttendYes = booking.id;
    yesBtn.textContent = 'Sí asistió';
    attendanceCell.appendChild(yesBtn);
    const noBtn = document.createElement('button');
    noBtn.className = `switch-btn ${booking.prisonAttendance === 'no-asistio' ? 'primary' : ''}`.trim();
    noBtn.dataset.prisonAttendNo = booking.id;
    noBtn.textContent = 'No asistió';
    attendanceCell.appendChild(noBtn);
    row.appendChild(attendanceCell);

    const checkInCell = document.createElement('td');
    const checkInBtn = document.createElement('button');
    checkInBtn.className = 'switch-btn primary';
    checkInBtn.dataset.prisonCheckin = booking.id;
    checkInBtn.textContent = booking.checkedInAt ? `Check-in asistente ${fmtDate(booking.checkedInAt)}` : 'Registrar check-in asistente';
    checkInBtn.disabled = Boolean(booking.checkedInAt);
    checkInCell.appendChild(checkInBtn);
    row.appendChild(checkInCell);

    const reminderCell = document.createElement('td');
    const reminderBtn = document.createElement('button');
    reminderBtn.className = 'switch-btn';
    reminderBtn.dataset.prisonNotify = booking.id;
    reminderBtn.textContent = 'WhatsApp y email';
    reminderCell.appendChild(reminderBtn);
    row.appendChild(reminderCell);

    prisonVisitsBody.appendChild(row);
  });

  prisonVisitsBody.querySelectorAll('[data-prison-checkin]').forEach(btn => {
    btn.onclick = async () => {
      const bookingId = btn.dataset.prisonCheckin;
      updateBooking(bookingId, booking => {
        booking.checkedInAt = new Date().toISOString();
        booking.status = booking.status === 'nueva' ? 'confirmada' : booking.status;
      });

      const updatedBooking = getBookings().find(item => item.id === bookingId);
      if (updatedBooking) {
        await notifyBookingChannels(updatedBooking, buildPrisonCheckInMessage(updatedBooking), 'TACAM: check-in asistente visita a la cárcel');
      }
    };
  });

  prisonVisitsBody.querySelectorAll('[data-prison-attend-yes]').forEach(btn => {
    btn.onclick = () => updateBooking(btn.dataset.prisonAttendYes, booking => {
      booking.prisonAttendance = 'asistio';
      booking.status = 'atendida';
      booking.hiredLawyer = true;
    });
  });

  prisonVisitsBody.querySelectorAll('[data-prison-attend-no]').forEach(btn => {
    btn.onclick = () => updateBooking(btn.dataset.prisonAttendNo, booking => {
      booking.prisonAttendance = 'no-asistio';
      booking.status = 'confirmada';
      booking.hiredLawyer = true;
    });
  });

  prisonVisitsBody.querySelectorAll('[data-prison-lawyer]').forEach(select => {
    select.onchange = () => updateBooking(select.dataset.prisonLawyer, booking => {
      booking.assignedTo = normalizeAssignedToValue(select.value);
      if (booking.hiredLawyer && !booking.assignedTo) {
        booking.hiredLawyer = false;
      }
    });
  });

  prisonVisitsBody.querySelectorAll('[data-prison-notify]').forEach(btn => {
    btn.onclick = async () => {
      const booking = getBookings().find(item => item.id === btn.dataset.prisonNotify);
      if (booking) await notifyBookingChannels(booking, buildVisitScheduledMessage(booking), 'TACAM: recordatorio de visita a la cárcel');
    };
  });
}

function renderLawyers() {
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const lawyers = getLawyers().filter(lawyer => role !== 'Abogada' || !sessionLawyer || lawyer.name === sessionLawyer);
  lawyerList.replaceChildren();

  if (!lawyers.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No hay abogados cargados.';
    lawyerList.appendChild(empty);
    return;
  }

  lawyers.forEach(lawyer => {
    const card = document.createElement('article');
    card.className = 'lawyer-card';

    const photo = document.createElement('img');
    photo.src = lawyer.photo;
    photo.alt = `Foto de ${lawyer.name || ''}`;
    card.appendChild(photo);

    const content = document.createElement('div');
    content.className = 'lawyer-card-content';
    const name = document.createElement('h3');
    name.textContent = lawyer.name || '';
    content.appendChild(name);

    const info = document.createElement('div');
    info.className = 'lawyer-info';
    const infoRows = [
      ['Especialidad', lawyer.specialty || 'Sin especialidad'],
      ['Cédula', lawyer.rut || 'No registrada'],
      ['Correo', lawyer.email || 'Sin correo'],
      ['WhatsApp', lawyer.phone || 'Sin WhatsApp']
    ];
    infoRows.forEach(([label, value]) => {
      const row = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = `${label}: `;
      row.appendChild(strong);
      row.appendChild(document.createTextNode(String(value)));
      info.appendChild(row);
    });
    content.appendChild(info);

    const stats = getLawyerStats(lawyer.name || '');
    const statsList = document.createElement('ul');
    statsList.className = 'lawyer-stats';

    const statsRows = [
      `Total: ${stats.total}`,
      `Nuevas: ${stats.nueva}`,
      `Confirmadas: ${stats.confirmada}`,
      `Atendidas: ${stats.atendida}`,
      `Canceladas: ${stats.cancelada}`
    ];

    statsRows.forEach(itemText => {
      const item = document.createElement('li');
      item.textContent = itemText;
      statsList.appendChild(item);
    });

    content.appendChild(statsList);
    card.appendChild(content);
    lawyerList.appendChild(card);
  });
}

function renderProfiles() {
  const profiles = getProfiles();
  profileList.replaceChildren();

  if (!profiles.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No hay perfiles creados.';
    profileList.appendChild(empty);
    return;
  }

  profiles.forEach(profile => {
    const card = document.createElement('article');
    card.className = 'profile-card';

    const content = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = `${profile.name} (${profile.role})`;
    content.appendChild(title);

    const user = document.createElement('small');
    user.textContent = `Usuario: ${profile.username}`;
    content.appendChild(user);

    const perms = document.createElement('ul');
    perms.className = 'profile-perms';
    (profile.permissions || []).forEach(permission => {
      const item = document.createElement('li');
      item.textContent = permission;
      perms.appendChild(item);
    });

    content.appendChild(perms);
    card.appendChild(content);
    profileList.appendChild(card);
  });
}

function renderAll() {
  renderLawyerOptions();
  renderClientOptions();
  renderClients();
  renderImputadosModule();
  renderClientEditOptions();
  renderBookings();
  renderAgenda();
  renderAgendaCalendar();
  renderPrisonCalendar();
  renderPrisonVisitsList();
  renderGendarmeriaVisitOptions();
  renderLawyers();
  renderLawyerCalendar();
  renderProfiles();
  renderReports();
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(loginForm);
  const username = String(data.get('username') || '').trim();
  const password = String(data.get('password') || '').trim();
  const auth = tryLogin(username, password);

  if (auth) {
    saveSession({ loggedIn: true, username: auth.username, role: auth.role, profileName: auth.profileName || '' });
    loginError.hidden = true;
    showApp();
    applyRoleAccess();
    renderAll();
  } else {
    loginError.hidden = false;
  }
});
clientForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(clientForm);
  const rut = formatRut(data.get('rut'));
  const phone = formatPhone(data.get('phone'));
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const address = String(data.get('address') || '').trim();
  const imputadoStatus = String(data.get('imputadoStatus') || 'no_imputado').trim() === 'imputado' ? 'imputado' : 'no_imputado';
  const inPrison = imputadoStatus === 'imputado' && String(data.get('inPrison') || 'no').trim() === 'si';
  const imputadoModule = inPrison ? String(data.get('imputadoModule') || '').trim() : '';
  const representative = buildRepresentativeRecord(data, name);

  if (!isValidRut(rut)) {
    clientRutInput.setCustomValidity('El RUT debe tener formato xx.xxx.xxx-x');
    clientRutInput.reportValidity();
    return;
  }
  clientRutInput.setCustomValidity('');

  if (phone && !isValidPhone(phone)) {
    clientPhoneInput.setCustomValidity('El teléfono debe tener formato +5691111111');
    clientPhoneInput.reportValidity();
    return;
  }
  clientPhoneInput.setCustomValidity('');
  clientForm.elements.email.setCustomValidity('');

  if (!name || !address) return;

  if (inPrison && !imputadoModule) {
    if (imputadoModuleInput) {
      imputadoModuleInput.setCustomValidity('Debes indicar el módulo si la persona está en la cárcel.');
      imputadoModuleInput.reportValidity();
    }
    return;
  }
  if (imputadoModuleInput) imputadoModuleInput.setCustomValidity('');

  if (imputadoStatus === 'imputado' && (!representative?.name || !representative?.lastName)) {
    representativeNameInput.setCustomValidity('Debes indicar el nombre del representante.');
    representativeNameInput.reportValidity();
    return;
  }
  representativeNameInput.setCustomValidity('');
  representativeLastNameInput.setCustomValidity('');

  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const clients = getClients();
  const existing = clients.find(client => (client.rut || '').trim() === rut);

  if (existing) {
    existing.name = name;
    existing.rut = rut;
    existing.phone = phone;
    existing.email = email;
    existing.address = address;
    existing.inPrison = inPrison;
    existing.prisonModule = inPrison ? imputadoModule : '';
    existing.imputadoStatus = imputadoStatus;
    existing.imputadoModule = inPrison ? imputadoModule : '';
    existing.representative = imputadoStatus === 'imputado' ? representative : null;
    existing.updatedAt = new Date().toISOString();
  } else {
    clients.unshift({
      id: crypto.randomUUID(),
      name,
      rut,
      phone,
      email,
      address,
      inPrison,
      prisonModule: inPrison ? imputadoModule : '',
      imputadoStatus,
      imputadoModule: inPrison ? imputadoModule : '',
      representative: imputadoStatus === 'imputado' ? representative : null,
      createdAt: new Date().toISOString()
    });
  }

  saveClients(clients);
  clientForm.reset();
  clientPhoneInput.value = '';
  imputadoStatusInput.value = 'no_imputado';
  inPrisonInput.value = 'no';
  updateImputadoModuleVisibility();
  updateRepresentativeVisibility();
  renderAll();
  playSaveChime();
  showToast('Datos guardados correctamente.');
});

clientEditForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(clientEditForm);
  const clientId = String(data.get('clientId') || '').trim();
  const rut = formatRut(data.get('rut'));
  const phone = formatPhone(data.get('phone'));
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const address = String(data.get('address') || '').trim();
  const imputadoStatus = String(data.get('imputadoStatus') || 'no_imputado').trim() === 'imputado' ? 'imputado' : 'no_imputado';
  const inPrison = imputadoStatus === 'imputado' && String(data.get('inPrison') || 'no').trim() === 'si';
  const representative = buildRepresentativeRecord(data, name);
  const hiredLater = Boolean(data.get('hiredLater'));
  const assignedTo = normalizeAssignedToValue(data.get('assignedTo'));

  if (!clientId || !name || !address) return;

  if (!isValidRut(rut)) {
    clientEditRutInput.setCustomValidity('RUT inválido');
    clientEditRutInput.reportValidity();
    return;
  }
  clientEditRutInput.setCustomValidity('');

  if (phone && !isValidPhone(phone)) {
    clientEditPhoneInput.setCustomValidity('Teléfono inválido');
    clientEditPhoneInput.reportValidity();
    return;
  }
  clientEditPhoneInput.setCustomValidity('');
  if (imputadoStatus === 'imputado' && (!representative?.name || !representative?.lastName)) {
    clientEditRepresentativeNameInput.setCustomValidity('Debes indicar el nombre del representante.');
    clientEditRepresentativeNameInput.reportValidity();
    return;
  }
  clientEditRepresentativeNameInput.setCustomValidity('');

  const clients = getClients();
  const client = clients.find(item => item.id === clientId);
  if (!client) return;
  const representativeData = representative || client.representative || null;

  client.name = name;
  client.rut = rut;
  client.phone = phone;
  client.email = email;
  client.address = address;
  client.imputadoStatus = imputadoStatus;
  client.inPrison = inPrison;
  client.prisonModule = inPrison ? (client.imputadoModule || client.prisonModule || '') : '';
  client.imputadoModule = inPrison ? (client.imputadoModule || client.prisonModule || '') : '';
  client.representative = representativeData;
  client.updatedAt = new Date().toISOString();
  saveClients(clients);

  const bookings = getBookings();
  bookings.forEach(booking => {
    if (booking.clientId !== clientId) return;
    booking.customer = name;
    booking.rut = rut;
    booking.phone = phone;
    booking.email = email;
    booking.address = address;
    booking.imputadoStatus = imputadoStatus;
    booking.inPrison = inPrison;
    booking.prisonModule = inPrison ? (client.imputadoModule || client.prisonModule || '') : '';
    booking.representative = representativeData;
    if (hiredLater && !isPrisonVisit(booking)) {
      booking.hiredLawyer = true;
      booking.assignedTo = assignedTo;
      booking.status = booking.status === 'cancelada' ? 'confirmada' : booking.status;
    }
  });
  saveBookings(bookings);
  renderAll();
  clientEditSelect.value = clientId;
  fillClientEditForm(clientId);
  playSaveChime();
  showToast('Contacto actualizado correctamente.');
});

bookingForm.addEventListener('submit', async event => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const selectedClientId = String(data.get('clientId') || '').trim();
  const selectedClient = getClients().find(client => client.id === selectedClientId);
  if (!selectedClient) {
    showToast('Debes seleccionar un contacto guardado.');
    return;
  }

  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const hiredLawyer = Boolean(data.get('hiredLawyer'));
  const assignedTo = role === 'Abogada' && sessionLawyer ? sessionLawyer : normalizeAssignedToValue(data.get('assignedTo'));
  const bookingImputadoStatus = String(data.get('bookingImputadoStatus') || 'no_imputado').trim() === 'imputado' ? 'imputado' : 'no_imputado';
  const bookingInPrison = bookingImputadoStatus === 'imputado' && String(data.get('bookingInPrison') || 'no').trim() === 'si';
  const bookingRepresentative = buildRepresentativeRecord(data, selectedClient.name, 'booking');
  const bookingRepresentativeModulo = String(data.get('modulo') || '').trim();
  const bookingPrisonModule = bookingInPrison ? String(selectedClient.imputadoModule || selectedClient.prisonModule || '').trim() : '';
  if (bookingRepresentative && bookingRepresentativeModulo) {
    bookingRepresentative.modulo = bookingRepresentativeModulo;
  }
  if (bookingImputadoStatus === 'imputado' && (!bookingRepresentative?.name || !bookingRepresentative?.lastName)) {
    bookingRepresentativeNameInput.setCustomValidity('Debes indicar el nombre del representante.');
    bookingRepresentativeNameInput.reportValidity();
    return;
  }
  bookingRepresentativeNameInput.setCustomValidity('');

  const bookings = getBookings();
  bookings.unshift({
    id: crypto.randomUUID(),
    clientId: selectedClient.id,
    customer: selectedClient.name,
    rut: selectedClient.rut,
    phone: selectedClient.phone,
    email: selectedClient.email,
    address: selectedClient.address,
    inPrison: bookingInPrison,
    prisonModule: bookingPrisonModule,
    imputadoStatus: bookingImputadoStatus,
    representative: bookingImputadoStatus === 'imputado' ? bookingRepresentative : null,
    matter: normalizeMatterLabel(data.get('matter')),
    date: String(data.get('date') || '').trim(),
    time: String(data.get('time') || '').trim(),
    assignedTo: hiredLawyer ? assignedTo : '',
    hiredLawyer,
    notes: String(data.get('notes') || '').trim(),
    notificationsConsent: Boolean(data.get('notificationsConsent')),
    consentAt: data.get('notificationsConsent') ? new Date().toISOString() : '',
    prisonAttendance: '',
    status: 'nueva',
    createdAt: new Date().toISOString(),
    reminder24hSentAt: '',
    reminder1hSentAt: '',
    checkedInAt: ''
  });
  saveBookings(bookings);
  await notifyVisitScheduled(bookings[0]);
  bookingForm.reset();
  clientSearchInput.value = '';
  clientSearchResults.replaceChildren();
  clientSelectedLabel.textContent = 'Contacto seleccionado: ninguno';
  fillSelectedClientPreview(null);
  hiredLawyerInput.checked = true;
  bookingImputadoStatusInput.dataset.manualChange = '0';
  bookingImputadoStatusInput.value = 'no_imputado';
  updateBookingRepresentativeVisibility();
  renderAll();
  playSaveChime();
  showToast('✅ Reserva guardada correctamente.', { forcePopup: true });
});

prisonBookingForm.addEventListener('submit', async event => {
  event.preventDefault();
  const data = new FormData(prisonBookingForm);
  const clientId = String(data.get('clientId') || '').trim();
  const role = getCurrentSessionRole();
  const sessionLawyer = getCurrentSessionLawyerName();
  const assignedTo = role === 'Abogada' && sessionLawyer ? sessionLawyer : normalizeAssignedToValue(data.get('assignedTo'));
  const clients = getClients();
  const client = clients.find(item => item.id === clientId);
  if (!client) {
    showToast('Debes seleccionar un contacto.');
    return;
  }

  const prisonModule = String(data.get('prisonModule') || '').trim() || getClientModuleValue(client);
  if (!prisonModule) {
    if (prisonClientModuleInput) {
      prisonClientModuleInput.setCustomValidity('Debes indicar el módulo del interno.');
      prisonClientModuleInput.reportValidity();
    }
    return;
  }
  if (prisonClientModuleInput) prisonClientModuleInput.setCustomValidity('');

  if (String(client.prisonModule || '').trim() !== prisonModule || String(client.imputadoModule || '').trim() !== prisonModule) {
    client.prisonModule = prisonModule;
    client.imputadoModule = prisonModule;
    client.updatedAt = new Date().toISOString();
    saveClients(clients);
  }

  const bookings = getBookings();
  bookings.unshift({
    id: crypto.randomUUID(),
    clientId: client.id,
    customer: client.name,
    rut: client.rut,
    phone: client.phone,
    email: client.email,
    address: client.address,
    matter: PRISON_VISIT_MATTER,
    prisonModule,
    inPrison: true,
    date: String(data.get('date') || '').trim(),
    time: String(data.get('time') || '').trim().slice(0, 5),
    assignedTo,
    hiredLawyer: true,
    notes: String(data.get('notes') || '').trim(),
    notificationsConsent: Boolean(data.get('notificationsConsent')),
    consentAt: data.get('notificationsConsent') ? new Date().toISOString() : '',
    prisonAttendance: '',
    status: 'confirmada',
    createdAt: new Date().toISOString(),
    reminder24hSentAt: '',
    reminder1hSentAt: '',
    checkedInAt: ''
  });
  saveBookings(bookings);
  await notifyVisitScheduled(bookings[0]);
  prisonBookingForm.reset();
  setPrisonClientSelection(null);
  renderAll();
  playSaveChime();
  showToast('Visita a la cárcel agendada correctamente.', { forcePopup: true });
});

clientRutInput.addEventListener('input', () => {
  const cursorAtEnd = clientRutInput.selectionStart === clientRutInput.value.length;
  clientRutInput.value = formatRut(clientRutInput.value);
  if (cursorAtEnd) clientRutInput.setSelectionRange(clientRutInput.value.length, clientRutInput.value.length);
});

clientPhoneInput.addEventListener('input', () => {
  clientPhoneInput.value = formatPhone(clientPhoneInput.value);
});
representativeRutInput.addEventListener('input', () => {
  representativeRutInput.value = formatRut(representativeRutInput.value);
});
representativePhoneInput.addEventListener('input', () => {
  representativePhoneInput.value = formatPhone(representativePhoneInput.value);
});
imputadoStatusInput.addEventListener('change', () => {
  updateImputadoModuleVisibility();
  updateRepresentativeVisibility();
});
inPrisonInput.addEventListener('change', () => {
  updateImputadoModuleVisibility();
});
bookingImputadoStatusInput.addEventListener('change', () => {
  bookingImputadoStatusInput.dataset.manualChange = '1';
  updateBookingRepresentativeVisibility();
});
bookingRepresentativeRutInput.addEventListener('input', () => {
  bookingRepresentativeRutInput.value = formatRut(bookingRepresentativeRutInput.value);
});
bookingRepresentativePhoneInput.addEventListener('input', () => {
  bookingRepresentativePhoneInput.value = formatPhone(bookingRepresentativePhoneInput.value);
});

if (clientSearchInput) clientSearchInput.addEventListener('input', renderClientOptions);
if (prisonClientSearchInput) prisonClientSearchInput.addEventListener('input', queuePrisonClientSearch);
if (prisonClientSelect) {
  prisonClientSelect.addEventListener('change', () => {
    const client = getVisibleClientsForSession().find(item => item.id === prisonClientSelect.value);
    setPrisonClientSelection(client || null, { updateSearch: false });
  });
}
if (clientEditSelect) clientEditSelect.addEventListener('change', () => fillClientEditForm(clientEditSelect.value));
if (deleteClientBtn) {
  deleteClientBtn.addEventListener('click', () => {
    const clientId = String(clientEditSelect?.value || '').trim();
    if (!clientId) {
      showToast('Selecciona un contacto para borrar.');
      return;
    }
    const clients = getClients();
    const client = clients.find(item => item.id === clientId);
    if (!client) {
      showToast('El contacto ya no existe.');
      renderAll();
      return;
    }
    if (!window.confirm(`¿Borrar definitivamente a ${client.name || 'este contacto'} y sus reservas asociadas?`)) return;

    saveClients(clients.filter(item => item.id !== clientId));
    saveBookings(getBookings().filter(booking => booking.clientId !== clientId));
    clientEditForm.reset();
    if (clientEditSelect) clientEditSelect.value = '';
    deleteClientBtn.disabled = true;
    renderAll();
    playSaveChime();
    showToast('Contacto borrado correctamente.');
  });
}
clientEditRutInput.addEventListener('input', () => {
  clientEditRutInput.value = formatRut(clientEditRutInput.value);
});
clientEditPhoneInput.addEventListener('input', () => {
  clientEditPhoneInput.value = formatPhone(clientEditPhoneInput.value);
});
clientEditImputadoStatusInput.addEventListener('change', () => {
  updateEditRepresentativeVisibility();
});
clientEditRepresentativeRutInput.addEventListener('input', () => {
  clientEditRepresentativeRutInput.value = formatRut(clientEditRepresentativeRutInput.value);
});
clientEditRepresentativePhoneInput.addEventListener('input', () => {
  clientEditRepresentativePhoneInput.value = formatPhone(clientEditRepresentativePhoneInput.value);
});
clientEditHiredLaterInput.addEventListener('change', () => {
  clientEditAssignedToSelect.disabled = !clientEditHiredLaterInput.checked;
  if (!clientEditHiredLaterInput.checked) {
    clientEditAssignedToSelect.value = UNASSIGNED_LAWYER_LABEL;
  }
});
hiredLawyerInput.addEventListener('change', () => {
  assignedToSelect.disabled = !hiredLawyerInput.checked;
  if (!hiredLawyerInput.checked) assignedToSelect.value = '';
});

if (lawyerFilter) {
  lawyerFilter.addEventListener('change', () => {
    renderAgenda();
    renderAgendaCalendar();
  });
}
if (agendaMonthInput) agendaMonthInput.addEventListener('change', renderAgendaCalendar);
if (prisonMonthInput) {
  prisonMonthInput.addEventListener('change', () => {
    renderPrisonCalendar();
    renderPrisonVisitsList();
    renderGendarmeriaVisitOptions();
  });
}
if (prisonLawyerFilter) {
  prisonLawyerFilter.addEventListener('change', () => {
    renderPrisonCalendar();
    renderPrisonVisitsList();
    renderGendarmeriaVisitOptions();
  });
}
document.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (prisonClientSearchResults && prisonClientSearchInput && !prisonClientSearchResults.contains(target) && target !== prisonClientSearchInput) {
    prisonClientSearchResults.replaceChildren();
  }
});

if (sendGendarmeriaEmailBtn) {
  sendGendarmeriaEmailBtn.addEventListener('click', async () => {
    const bookingIds = Array.from(gendarmeriaVisitSelect?.selectedOptions || []).map(option => option.value).filter(Boolean);
    if (!bookingIds.length) {
      showToast('Selecciona una o más visitas para enviar a Gendarmería.');
      gendarmeriaVisitSelect?.focus();
      return;
    }

    const visits = getVisibleBookingsForSession(getBookings()).filter(item => bookingIds.includes(item.id) && isPrisonVisit(item));
    if (!visits.length) {
      showToast('Las visitas seleccionadas ya no existen.');
      renderGendarmeriaVisitOptions();
      return;
    }

    if (!window.confirm(`¿Confirmar envío manual a Gendarmería para ${visits.length} visita(s) de mañana?`)) return;

    const subject = `TACAM: Nómina visita a la cárcel ${visits[0]?.date || ''}`.trim();
    try {
      const sent = await sendGendarmeriaRoster(visits, subject);
      if (!sent) throw new Error('No se pudo enviar');
      const sentAt = new Date().toISOString();
      const bookings = getBookings();
      bookings.forEach(current => {
        if (bookingIds.includes(current.id)) current.gendarmeriaNotifiedAt = sentAt;
      });
      saveBookings(bookings);
      renderAll();
      showToast('Nómina enviada a Gendarmería.');
    } catch (error) {
      console.error('No se pudo enviar a Gendarmería', error);
      showToast('Error al enviar a Gendarmería.');
    }
  });
}
lawyerCalendarFilter.addEventListener('change', renderLawyerCalendar);
lawyerCalendarMonth.addEventListener('change', renderLawyerCalendar);
sharedOnlyInput.addEventListener('change', renderLawyerCalendar);
reportLawyerFilter.addEventListener('change', renderReports);

imputadosBody.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const visitClientId = target.dataset.imputadoVisit;
  if (visitClientId) {
    switchModule('prison-visits');
    const client = getClients().find(item => item.id === visitClientId) || null;
    setPrisonClientSelection(client);
    showToast('Contacto cargado para agendar visita.');
    return;
  }

  const editClientId = target.dataset.imputadoEdit;
  if (editClientId) {
    switchModule('clients');
    clientEditSelect.value = editClientId;
    fillClientEditForm(editClientId);
    showToast('Contacto cargado para edición.');
    return;
  }

  const representativeClientId = target.dataset.imputadoRepresentative;
  if (representativeClientId) {
    const clients = getClients();
    const client = clients.find(item => item.id === representativeClientId);
    if (!client) return;

    let representative = null;
    if (window.confirm('¿Quieres buscar el representante entre contactos existentes?')) {
      const query = String(window.prompt('Ingresa nombre o RUT del representante') || '').trim().toLowerCase();
      const match = clients.find(item =>
        item.id !== client.id
        && (`${item.name || ''} ${item.rut || ''}`.toLowerCase().includes(query))
      );
      if (match) {
        representative = {
          name: match.name || '',
          rut: match.rut || '',
          phone: match.phone || '',
          email: match.email || '',
          address: match.address || ''
        };
      } else {
        showToast('No se encontró representante en los contactos existentes.');
      }
    }

    if (!representative) {
      representative = promptRepresentativeData(client.representative || null, client.name || 'contacto');
    }
    if (!representative?.name) {
      showToast('No se agregó representante.');
      return;
    }

    client.imputadoStatus = 'imputado';
    client.representative = { ...representative, represents: client.name || '' };
    saveClients(clients);

    const bookings = getBookings();
    bookings.forEach(booking => {
      if (booking.clientId !== client.id) return;
      booking.imputadoStatus = 'imputado';
      booking.representative = { ...representative, represents: client.name || '' };
    });
    saveBookings(bookings);
    renderAll();
    showToast('Representante agregado correctamente.');
    return;
  }

  const okClientId = target.dataset.imputadoOk;
  if (okClientId) {
    saveClients(getClients());
    saveBookings(getBookings());
    playSaveChime();
    showToast('Datos guardados correctamente.');
    return;
  }

  const prisonSaveClientId = target.dataset.prisonRepresentativeSave;
  if (prisonSaveClientId) {
    const clients = getClients();
    const client = clients.find(item => item.id === prisonSaveClientId);
    if (!client) return;
    const selector = prisonImputadosBody.querySelector(`[data-prison-representative-select="${prisonSaveClientId}"]`);
    if (selector instanceof HTMLSelectElement && selector.value) {
      const selected = clients.find(item => item.id === selector.value);
      if (selected) {
        client.imputadoStatus = 'imputado';
        client.representative = {
          name: selected.name || '',
          rut: selected.rut || '',
          phone: selected.phone || '',
          email: selected.email || '',
          address: selected.address || '',
          represents: client.name || ''
        };
      }
    }
    saveClients(clients);
    const bookings = getBookings();
    bookings.forEach(booking => {
      if (booking.clientId !== client.id) return;
      booking.imputadoStatus = client.imputadoStatus || 'no_imputado';
      booking.representative = client.representative || null;
      booking.inPrison = Boolean(client.inPrison);
      booking.prisonModule = client.prisonModule || '';
    });
    saveBookings(bookings);
    renderAll();
    playSaveChime();
    showToast('Datos de cárcel/representante guardados.');
  }
});

imputadosBody.addEventListener('change', event => {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) return;
  const clientId = target.dataset.imputadoLawyer || target.dataset.imputadoStatusBooking;
  if (!clientId) return;

  const bookings = getBookings();
  const booking = bookings
    .filter(item => item.clientId === clientId)
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))[0];
  if (!booking) {
    showToast('Este contacto aún no tiene reservas.');
    return;
  }

  if (target.dataset.imputadoLawyer) {
    booking.assignedTo = normalizeAssignedToValue(target.value);
    playSaveChime();
    showToast('Abogada actualizada.');
  } else if (target.dataset.imputadoStatusBooking) {
    booking.status = target.value;
    playSaveChime();
    showToast('Estado actualizado.');
  }
  saveBookings(bookings);
  renderAll();
});

downloadGeneralReportBtn.addEventListener('click', () => {
  const stats = getGeneralStatusStats();
  downloadCsv('reporte-general-tacam.csv', [
    ['Estado', 'Cantidad'],
    ['Nueva', stats.nueva],
    ['Confirmada', stats.confirmada],
    ['Atendida', stats.atendida],
    ['Cancelada', stats.cancelada]
  ]);
  showToast('Reporte general descargado.');
});

downloadLawyerReportBtn.addEventListener('click', () => {
  const rows = [['Abogada', 'Total citas', 'Atendidas']];
  getLawyerAttentionStats().forEach(item => {
    rows.push([item.lawyer, item.total, item.atendida]);
  });
  downloadCsv('reporte-abogadas-tacam.csv', rows);
  showToast('Reporte por abogada descargado.');
});

downloadBookingsReportBtn.addEventListener('click', () => {
  const rows = [[
    'ID', 'Contacto', 'Representante', 'RUT', 'Materia', 'Telefono', 'Correo', 'Fecha', 'Hora', 'Abogada', 'Estado', 'Consentimiento', 'Motivo', 'Creada en'
  ]];
  getBookings().forEach(booking => {
    rows.push([
      booking.id,
      booking.customer,
      getBookingRepresentative(booking),
      booking.rut,
      normalizeMatterLabel(booking.matter),
      booking.phone,
      booking.email,
      booking.date,
      booking.time,
      booking.assignedTo,
      booking.status,
      booking.notificationsConsent ? 'Sí' : 'No',
      booking.notes,
      booking.createdAt
    ]);
  });
  downloadCsv('reporte-detalle-citas-tacam.csv', rows);
  showToast('Detalle de leads descargado.');
});

downloadBackupJsonBtn.addEventListener('click', () => {
  downloadJson(`respaldo-tacam-${new Date().toISOString().slice(0, 10)}.json`, createBackupPayload());
  showToast('Respaldo JSON descargado.');
});

restoreBackupJsonBtn.addEventListener('click', () => {
  restoreBackupInput.click();
});

restoreBackupInput.addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const content = await file.text();
    const payload = JSON.parse(content);
    restoreBackupPayload(payload);
    showToast('Respaldo cargado correctamente.');
  } catch (error) {
    console.error('No se pudo restaurar el respaldo', error);
    showToast('No se pudo cargar el respaldo JSON.');
  } finally {
    restoreBackupInput.value = '';
  }
});

moduleTabs.forEach(tab => {
  tab.addEventListener('click', () => switchModule(tab.dataset.moduleTab));
});
printChartButtons.forEach(button => {
  button.addEventListener('click', () => {
    printChartByCanvasId(button.dataset.printChart);
  });
});

lawyerForm.addEventListener('submit', async event => {
  event.preventDefault();
  const data = new FormData(lawyerForm);
  const file = data.get('photo');
  if (!(file instanceof File) || !file.size) return;

  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim().toLowerCase();
  const specialty = String(data.get('specialty') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  if (!name || !email) return;

  const lawyers = getLawyers();
  const existing = lawyers.find(lawyer => (lawyer.name || '').trim().toLowerCase() === name.toLowerCase());

  if (existing) {
    existing.specialty = specialty;
    existing.phone = phone;
    existing.email = email;
    existing.photo = await fileToDataUrl(file);
  } else {
    lawyers.unshift({
      id: crypto.randomUUID(),
      name,
      specialty,
      phone,
      email,
      photo: await fileToDataUrl(file)
    });
  }

  saveLawyers(lawyers);
  const profiles = getProfiles();
  const username = email.split('@')[0] || email;
  const profile = profiles.find(item => {
    const currentUser = (item.username || '').trim().toLowerCase();
    const currentEmail = (item.email || '').trim().toLowerCase();
    return currentUser === username.toLowerCase() || currentEmail === email;
  });
  if (profile) {
    profile.name = name;
    profile.username = username;
    profile.role = 'Abogada';
    profile.email = email;
    profile.phone = phone ? formatPhone(phone) : profile.phone || '';
    profile.specialty = specialty;
    if (!profile.password) profile.password = 'tacam123';
  } else {
    profiles.unshift({
      id: crypto.randomUUID(),
      name,
      username,
      password: 'tacam123',
      role: 'Abogada',
      email,
      phone: phone ? formatPhone(phone) : '',
      specialty,
      permissions: ['Visitas', 'Imputados', 'Editar contactos']
    });
  }
  saveProfiles(profiles);
  syncLawyerAndProfileUsers();
  lawyerForm.reset();
  renderAll();
  playSaveChime();
  showToast('Perfil de abogada guardado. Usuario: correo, clave inicial: tacam123');
});

profileForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(profileForm);
  const name = String(data.get('name') || '').trim();
  const username = String(data.get('username') || '').trim();
  const password = String(data.get('password') || '').trim();
  const rut = formatRut(data.get('rut'));
  const email = String(data.get('email') || '').trim();
  const phoneRaw = String(data.get('phone') || '').trim();
  const phone = phoneRaw ? formatPhone(phoneRaw) : '';
  const specialty = String(data.get('specialty') || '').trim();
  const role = String(data.get('role') || '').trim();

  if (!name || !username || !password || !role) return;

  const permissions = [];
  if (data.get('permBookings')) permissions.push('Reservas');
  if (data.get('permAgenda')) permissions.push('Agenda');
  if (data.get('permLawyers')) permissions.push('Abogadas');
  if (data.get('permReports')) permissions.push('Estadísticas');

  const profiles = getProfiles();
  const existing = profiles.find(profile => (profile.username || '').trim().toLowerCase() === username.toLowerCase());

  if (existing) {
    existing.name = name;
    existing.password = password;
    existing.rut = rut;
    existing.email = email;
    existing.phone = phone;
    existing.specialty = specialty;
    existing.role = role;
    existing.permissions = permissions;
  } else {
    profiles.unshift({
      id: crypto.randomUUID(),
      name,
      username,
      password,
      rut,
      email,
      phone,
      specialty,
      role,
      permissions
    });
  }

  saveProfiles(profiles);
  if (role === 'Abogada') {
    const lawyers = getLawyers();
    const lawyerExisting = lawyers.find(lawyer => (lawyer.name || '').trim().toLowerCase() === name.toLowerCase());
    if (lawyerExisting) {
      lawyerExisting.specialty = specialty || lawyerExisting.specialty || '';
      lawyerExisting.phone = phone || lawyerExisting.phone || '';
      lawyerExisting.email = email || lawyerExisting.email || '';
      lawyerExisting.rut = rut || lawyerExisting.rut || '';
    } else {
      lawyers.unshift({
        id: crypto.randomUUID(),
        name,
        specialty,
        phone,
        email,
        rut,
        photo: 'assets/logo-color.svg'
      });
    }
    saveLawyers(lawyers);
  }
  syncLawyerAndProfileUsers();
  profileForm.reset();
  renderLawyers();
  renderLawyerCalendar();
  renderPrisonCalendar();
  renderPrisonVisitsList();
  renderProfiles();
  playSaveChime();
  showToast('Perfil de usuario guardado.');
});

switchModule('create');

const currentMonth = monthValueFromDate(new Date());
agendaMonthInput.value = currentMonth;
prisonMonthInput.value = currentMonth;
lawyerCalendarMonth.value = currentMonth;
gendarmeriaEmailInput.value = GENDARMERIA_RECIPIENTS[0];
gendarmeriaEmail2Input.value = GENDARMERIA_RECIPIENTS[1];
clientPhoneInput.value = '';
if (APP_CONFIG.internalToken) {
  console.info(`APP_INTERNAL_TOKEN cargado para WhatsApp interno (longitud: ${APP_CONFIG.internalToken.length}).`);
} else {
  console.warn('APP_INTERNAL_TOKEN no configurado para endpoint interno de WhatsApp.');
}
if (deleteClientBtn) deleteClientBtn.disabled = true;
if (clientsShowMoreBtn) {
  clientsShowMoreBtn.addEventListener('click', () => {
    clientsVisibleLimit += CLIENTS_PAGE_SIZE;
    renderClients();
  });
}
assignedToSelect.disabled = !hiredLawyerInput.checked;
updateImputadoModuleVisibility();
updateRepresentativeVisibility();
updateEditRepresentativeVisibility();
bookingImputadoStatusInput.dataset.manualChange = '0';
updateBookingRepresentativeVisibility();
updateSyncIndicator('pending', 'Sincronización: pendiente');
updateChileClock();
ensureDefaultLawyerAccessProfiles();
syncLawyerAndProfileUsers();
if (savePopup) {
  savePopup.addEventListener('click', () => {
    savePopup.hidden = true;
  });
}
if (savePopupOkBtn) {
  savePopupOkBtn.addEventListener('click', event => {
    event.stopPropagation();
    if (savePopup) savePopup.hidden = true;
  });
}

window.addEventListener('tacam-server-hydrated', () => {
  if (!appShell.hidden) {
    renderAll();
  }
});

// Restaurar sesión DESPUÉS de que el servidor hidrate (evita perder datos al recargar)
(function restoreSession() {
  const _existingSession = getSession();
  if (_existingSession && _existingSession.loggedIn) {
    window.addEventListener('tacam-server-hydrated', function onReady() {
      window.removeEventListener('tacam-server-hydrated', onReady);
      const session = getSession();
      if (session && session.loggedIn) {
        showApp();
        renderAll();
      } else {
        showLogin();
      }
    });
  } else {
    saveSession({ loggedIn: false });
    showLogin();
  }
})();
window.addEventListener('tacam-sync-status', event => {
  const detail = event.detail || {};
  updateSyncIndicator(detail.status || 'pending', detail.message || 'Sincronización', detail.at || '');
});

setInterval(() => {
  updateChileClock();
  if (!appShell.hidden) {
    void notifyUpcomingAppointments();
  }
}, 5000);
function updateImputadoModuleVisibility() {
  const inPrison = clientForm.elements['inPrison'].value === 'si';
  const moduleFields = document.querySelectorAll('.imputado-module-field');
  moduleFields.forEach(field => {
    field.hidden = !inPrison;
  });
}

// Escuchar cambios en el selector de la cárcel
clientForm.elements['inPrison'].addEventListener('change', updateImputadoModuleVisibility);
setInterval(() => {
  if (appShell.hidden) return;
  const activeTag = document.activeElement?.tagName?.toLowerCase() || '';
  if (['input', 'textarea', 'select'].includes(activeTag)) return;
  if (typeof hydrateFromServer === 'function') {
    void hydrateFromServer();
  }
}, 60000);
