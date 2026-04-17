<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $httpCode, bool $ok, string $message, array $extra = []): void
{
    http_response_code($httpCode);
    echo json_encode(array_merge([
        'ok' => $ok,
        'message' => $message,
    ], $extra), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function escape_html(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function build_email_html(string $toName, string $subject, string $textContent, string $templateType, array $templateData): string
{
    $safeToName = escape_html($toName);
    $safeSubject = escape_html($subject);
    $safeBody = nl2br(escape_html($textContent), false);

    $fecha = escape_html(trim((string)($templateData['fecha'] ?? '-')) ?: '-');
    $hora = escape_html(trim((string)($templateData['hora'] ?? '--:--')) ?: '--:--');
    $abogado = escape_html(trim((string)($templateData['abogado'] ?? 'Por confirmar')) ?: 'Por confirmar');
    $area = escape_html(trim((string)($templateData['area'] ?? 'General')) ?: 'General');
    $ubicacion = escape_html(trim((string)($templateData['ubicacion'] ?? 'Antofagasta, Chile')) ?: 'Antofagasta, Chile');

    $title = 'Actualización de tu cita';
    $subtitle = 'Revisa la información importante de tu gestión legal.';
    $icon = '📌';

    switch ($templateType) {
        case 'appointment_scheduled':
            $title = 'Su cita ha sido agendada';
            $subtitle = 'Hemos confirmado su consulta legal. A continuación los detalles:';
            $icon = '✅';
            break;
        case 'reschedule':
            $title = 'Su cita fue reagendada';
            $subtitle = 'Actualizamos su fecha de atención. Revise los nuevos datos:';
            $icon = '🔄';
            break;
        case 'reminder_24h':
            $title = 'Recordatorio de cita (24 horas)';
            $subtitle = 'Le recordamos que su cita está programada para mañana.';
            $icon = '⏰';
            break;
        case 'reminder_1h':
            $title = 'Recordatorio de cita';
            $subtitle = 'Su cita está próxima. Revise los datos para presentarse a tiempo.';
            $icon = '🕐';
            break;
        case 'status_update':
            $title = 'Actualización del estado de su reserva';
            $subtitle = 'Hemos registrado un cambio en su gestión. Revise el detalle:';
            $icon = '📣';
            break;
    }

    $safeTitle = escape_html($title);
    $safeSubtitle = escape_html($subtitle);
    $safeIcon = escape_html($icon);

    return <<<HTML
<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$safeSubject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
    <tr>
      <td align="center" style="padding:30px 10px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
          <tr>
            <td style="background-color:#b21f3a;padding:36px 40px;text-align:center;">
              <h1 style="margin:0;font-size:42px;color:#ffffff;letter-spacing:6px;font-weight:700;font-family:Georgia,'Times New Roman',serif;">TACAM</h1>
            </td>
          </tr>
          <tr>
            <td style="background-color:#7a1428;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <div style="width:64px;height:64px;border-radius:50%;background-color:#fdecef;display:inline-block;line-height:64px;text-align:center;">
                      <span style="font-size:32px;">{$safeIcon}</span>
                    </div>
                  </td>
                </tr>
              </table>

              <h2 style="margin:0 0 8px;font-size:22px;color:#b21f3a;text-align:center;font-weight:700;">{$safeTitle}</h2>
              <p style="margin:0 0 12px;font-size:14px;color:#6b7280;text-align:center;">Hola {$safeToName},</p>
              <p style="margin:0 0 12px;font-size:14px;color:#6b7280;text-align:center;">{$safeSubtitle}</p>
              <p style="margin:0 0 28px;font-size:14px;color:#4b5563;text-align:center;line-height:1.6;">{$safeBody}</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fbf7f8;border-radius:8px;border:1px solid #f0d8de;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="28" valign="top" style="padding-top:2px;"><span style="font-size:16px;">📅</span></td>
                        <td style="padding-left:8px;">
                          <p style="margin:0;font-size:11px;color:#b21f3a;text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Fecha</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#2a2a2a;font-weight:600;">{$fecha}</p>
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="28" valign="top" style="padding-top:2px;"><span style="font-size:16px;">🕐</span></td>
                        <td style="padding-left:8px;">
                          <p style="margin:0;font-size:11px;color:#b21f3a;text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Hora</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#2a2a2a;font-weight:600;">{$hora}</p>
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="28" valign="top" style="padding-top:2px;"><span style="font-size:16px;">👤</span></td>
                        <td style="padding-left:8px;">
                          <p style="margin:0;font-size:11px;color:#b21f3a;text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Abogado</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#2a2a2a;font-weight:600;">{$abogado}</p>
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="28" valign="top" style="padding-top:2px;"><span style="font-size:16px;">📋</span></td>
                        <td style="padding-left:8px;">
                          <p style="margin:0;font-size:11px;color:#b21f3a;text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Área de Consulta</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#2a2a2a;font-weight:600;">{$area}</p>
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" valign="top" style="padding-top:2px;"><span style="font-size:16px;">📍</span></td>
                        <td style="padding-left:8px;">
                          <p style="margin:0;font-size:11px;color:#b21f3a;text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Ubicación</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#2a2a2a;font-weight:600;">{$ubicacion}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="https://api.whatsapp.com/send/?phone=56942861876&text&type=phone_number&app_absent=0" target="_blank" style="display:inline-block;background-color:#25D366;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:6px;letter-spacing:0.3px;">💬 Comunicar con el Asistente</a>
                  </td>
                </tr>
              </table>

              <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;text-align:center;line-height:1.5;">Si necesita reagendar o cancelar su cita, contáctenos con al menos 24 horas de anticipación.</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;"><div style="border-top:1px solid #f0d8de;"></div></td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;padding:24px 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin:0 0 6px;font-size:14px;color:#b21f3a;font-weight:700;">Tacam Abogados</p>
                    <p style="margin:0 0 4px;font-size:12px;color:#6b7280;">Más de 20 años brindando soluciones legales efectivas</p>
                    <p style="margin:0 0 12px;font-size:12px;color:#6b7280;">Antofagasta, Chile · <a href="tel:+56942861876" style="color:#b21f3a;text-decoration:none;font-weight:600;">+56 9 4286 1876</a></p>
                    <p style="margin:0;"><a href="https://tacam.cl" target="_blank" style="font-size:12px;color:#b21f3a;text-decoration:none;font-weight:700;">www.tacam.cl</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#b21f3a;padding:14px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#ffd6de;">© 2026 Tacam Abogados. Todos los derechos reservados.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Method not allowed');
}

$apiKey = trim((string)(getenv('BREVO_API_KEY') ?: ''));
$senderEmail = trim((string)(getenv('BREVO_SENDER_EMAIL') ?: 'tacam@agenciayousay.cl'));
$senderName = trim((string)(getenv('BREVO_SENDER_NAME') ?: 'tacam'));
$replyToEmail = trim((string)(getenv('BREVO_REPLY_TO_EMAIL') ?: ''));
$replyToName = trim((string)(getenv('BREVO_REPLY_TO_NAME') ?: $senderName));

if ($apiKey === '') {
    respond(500, false, 'BREVO_API_KEY missing on server');
}
if ($senderEmail === '') {
    respond(500, false, 'BREVO_SENDER_EMAIL missing on server');
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($payload)) {
    respond(400, false, 'Invalid JSON body');
}

$toEmail = trim((string)($payload['toEmail'] ?? ''));
$toName = trim((string)($payload['toName'] ?? 'Cliente'));
$subject = trim((string)($payload['subject'] ?? ''));
$textContent = trim((string)($payload['textContent'] ?? ''));
$templateType = trim((string)($payload['templateType'] ?? ''));
$templateData = $payload['templateData'] ?? [];

if (!is_array($templateData)) {
    $templateData = [];
}

if ($toEmail === '' || $subject === '' || $textContent === '') {
    respond(422, false, 'Missing email payload fields');
}

$htmlContent = build_email_html($toName, $subject, $textContent, $templateType, $templateData);

$brevoPayload = [
    'sender' => [
        'name' => $senderName,
        'email' => $senderEmail,
    ],
    'to' => [[
        'email' => $toEmail,
        'name' => $toName,
    ]],
    'subject' => $subject,
    'textContent' => $textContent,
    'htmlContent' => $htmlContent,
];

if ($replyToEmail !== '') {
    $brevoPayload['replyTo'] = [
        'email' => $replyToEmail,
        'name' => $replyToName,
    ];
}

$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'accept: application/json',
        'api-key: ' . $apiKey,
        'content-type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode($brevoPayload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$statusCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($response === false) {
    respond(502, false, $curlError !== '' ? 'Brevo request failed' : 'Brevo request failed');
}

if ($statusCode < 200 || $statusCode >= 300) {
    $decoded = json_decode((string)$response, true);
    $apiMessage = is_array($decoded) ? (string)($decoded['message'] ?? '') : '';
    $apiMessageLower = strtolower($apiMessage);
    $message = $statusCode === 401
        ? (str_contains($apiMessageLower, 'key not found')
            ? 'Brevo rejected authentication: API key not found. Check BREVO_API_KEY on server.'
            : 'Brevo rejected authentication. Check API key and IP restrictions.')
        : 'Brevo API returned an error';
    respond($statusCode === 401 ? 401 : 502, false, $message, [
        'brevo_status' => $statusCode,
        'brevo_message' => $apiMessage,
    ]);
}

$decodedSuccess = json_decode((string)$response, true);
respond(200, true, 'Email sent', [
    'brevo_message_id' => is_array($decodedSuccess) ? (string)($decodedSuccess['messageId'] ?? '') : '',
]);
