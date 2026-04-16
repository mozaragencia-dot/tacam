<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $httpCode, bool $ok, string $status, string $errorMessage = '', string $twilioSid = ''): void
{
    http_response_code($httpCode);
    echo json_encode([
        'ok' => $ok,
        'status' => $status,
        'twilio_sid' => $twilioSid,
        'error_message' => $errorMessage,
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'method_not_allowed', 'Method not allowed');
}

$internalToken = trim((string)(getenv('APP_INTERNAL_TOKEN') ?: ''));
$accountSid = trim((string)(getenv('TWILIO_ACCOUNT_SID') ?: ''));
$authToken = trim((string)(getenv('TWILIO_AUTH_TOKEN') ?: ''));
$fromWhatsApp = trim((string)(getenv('TWILIO_WHATSAPP_FROM') ?: ''));

if ($internalToken === '' || $accountSid === '' || $authToken === '' || $fromWhatsApp === '') {
    respond(500, false, 'config_error', 'Missing required server configuration');
}

$providedToken = trim((string)($_SERVER['HTTP_X_INTERNAL_TOKEN'] ?? ''));
if ($providedToken === '' || !hash_equals($internalToken, $providedToken)) {
    respond(401, false, 'unauthorized', 'Invalid internal token');
}

$rawBody = file_get_contents('php://input') ?: '';
$payload = json_decode($rawBody, true);
if (!is_array($payload)) {
    respond(400, false, 'invalid_json', 'Invalid JSON body');
}

$toPhone = trim((string)($payload['toPhone'] ?? ''));
$message = trim((string)($payload['message'] ?? ''));

if ($toPhone === '' || $message === '') {
    respond(422, false, 'validation_error', 'toPhone and message are required');
}

$normalizedTo = preg_replace('/\s+/', '', $toPhone) ?? '';
if (!preg_match('/^\+\d{8,15}$/', $normalizedTo)) {
    respond(422, false, 'validation_error', 'Invalid destination phone format');
}

if (!preg_match('/^whatsapp:\+\d{8,15}$/', $fromWhatsApp)) {
    respond(500, false, 'config_error', 'Invalid TWILIO_WHATSAPP_FROM format');
}

$twilioUrl = sprintf('https://api.twilio.com/2010-04-01/Accounts/%s/Messages.json', rawurlencode($accountSid));
$formData = http_build_query([
    'To' => 'whatsapp:' . $normalizedTo,
    'From' => $fromWhatsApp,
    'Body' => $message,
], '', '&', PHP_QUERY_RFC3986);

$ch = curl_init($twilioUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
    CURLOPT_USERPWD => $accountSid . ':' . $authToken,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/x-www-form-urlencoded',
    ],
    CURLOPT_POSTFIELDS => $formData,
    CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$statusCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($response === false) {
    respond(502, false, 'twilio_unreachable', $curlError !== '' ? 'Twilio request failed' : 'Twilio request failed');
}

$twilioBody = json_decode((string)$response, true);
$twilioSid = is_array($twilioBody) ? (string)($twilioBody['sid'] ?? '') : '';
$twilioErrorMessage = is_array($twilioBody) ? (string)($twilioBody['message'] ?? '') : '';

if ($statusCode < 200 || $statusCode >= 300) {
    respond(502, false, 'twilio_error', $twilioErrorMessage !== '' ? 'Twilio API returned an error' : 'Twilio API returned an error');
}

respond(200, true, 'sent', '', $twilioSid);
