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

if ($toEmail === '' || $subject === '' || $textContent === '') {
    respond(422, false, 'Missing email payload fields');
}

function escape_html(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$safeToName = escape_html($toName);
$safeSubject = escape_html($subject);
$safeBody = nl2br(escape_html($textContent), false);

$htmlContent = <<<HTML
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{$safeSubject}</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f1f3;font-family:Arial,sans-serif;color:#2f1a21;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f1f3;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #eadce2;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg,#c92d4d,#b21f3a 58%,#86142a);padding:18px 20px;color:#fff;">
                <h1 style="margin:0;font-size:22px;line-height:1.2;">TACAM · Oficina Jurídica</h1>
                <p style="margin:6px 0 0;font-size:13px;opacity:.95;">Comunicación oficial</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 20px;">
                <p style="margin:0 0 12px;font-size:14px;">Hola {$safeToName},</p>
                <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">{$safeBody}</p>
                <p style="margin:18px 0 0;font-size:14px;">Saludos cordiales,<br><strong>Equipo TACAM</strong></p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;border-top:1px solid #f0e4e8;background:#fff8fb;">
                <p style="margin:0;font-size:12px;color:#6f1329;">Este correo fue enviado por TACAM. Para consultas responde a este mensaje.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
HTML;

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
    $message = $statusCode === 401
        ? 'Brevo rejected authentication. Check API key and IP restrictions.'
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
