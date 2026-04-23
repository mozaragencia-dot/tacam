# TACAM · Sistema de Reserva de Personas (Oficina de Abogados)

Aplicación web unificada para gestionar reservas de atención jurídica.

## Funcionalidades
- Registro de reserva con: nombre, teléfono, fecha, hora, abogado asignado y motivo de consulta.
- Gestión de reservas: confirmar, cancelar, reasignar abogado y notificar por WhatsApp.
- Agenda por abogado: filtro por profesional y opción para marcar cita como atendida.
- Perfiles de abogados con foto, especialidad y WhatsApp.
- Persistencia local en navegador (`localStorage`) y soporte PWA.

## WhatsApp de notificación
- Número de referencia TACAM: **+56987591312**.
- Mensaje base: "Desde TACAM, informamos toda la información de su reserva..."


## Dominio de producción
- Subdominio objetivo: `www.apolo.tacam.cl`.
- Recomendación: servir esta carpeta desde ese host y mantener el endpoint `brevo-email.php` en el mismo dominio para evitar CORS.

## Brevo (correo transaccional)
La app ahora puede enviar correos mediante `brevo-email.php`, manteniendo la API key fuera del navegador.

### Variables necesarias en el servidor
- `BREVO_API_KEY`
- `BREVO_SENDER_EMAIL` (opcional, por defecto `noresponder@tacam.cl`)
- `BREVO_SENDER_NAME` (opcional, por defecto `TACAM`)
- `BREVO_REPLY_TO_EMAIL` (opcional)
- `BREVO_REPLY_TO_NAME` (opcional)

> Desde abril de 2026 el endpoint **ya no incluye fallback de API key** por seguridad.  
> Si no configuras `BREVO_API_KEY`, `brevo-email.php` responderá con error `Brevo server config missing`.

### Tipos de correo (plantillas distintas)
- `templateType: "appointment_scheduled" | "reschedule" | "reminder_24h" | "reminder_1h" | "status_update"` para notificaciones de agendamiento, recordatorios y cambios.
- `templateType: "gendarmeria_roster"` para la nómina de Gendarmería con el diseño formal original.

### Cómo probar localmente con PHP
```bash
BREVO_API_KEY=tu_api_key \
BREVO_SENDER_EMAIL=tacam@agenciayousay.cl \
BREVO_SENDER_NAME="tacam" \
php -S 127.0.0.1:4173
```

Luego abre `http://127.0.0.1:4173` (en producción usar `https://www.apolo.tacam.cl`).

> Importante: el remitente configurado en Brevo debe estar verificado en tu cuenta.

### Diagnóstico rápido de fallas de correo
1. Verifica que el servidor soporte PHP con `curl` habilitado.
2. Prueba el endpoint directamente:
   ```bash
   curl -i -X POST http://127.0.0.1:4173/brevo-email.php \
     -H "Content-Type: application/json" \
     -d '{"toEmail":"test@example.com","toName":"Test","subject":"Prueba TACAM","textContent":"Hola"}'
   ```
3. Si falla, revisa el JSON de respuesta (`error` y `providerResponse`).

## Empaquetar para envío
```bash
./package.sh
```
El paquete queda en `dist/tacam-static-app.zip`.

## Ejecutar localmente (modo estático, sin Brevo)
```bash
python3 -m http.server 4173
```
Abrir: `http://localhost:4173`
