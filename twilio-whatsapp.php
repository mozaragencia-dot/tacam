<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$accountSid = trim((string)(getenv('TWILIO_ACCOUNT_SID') ?: ''));
$authToken = trim((string)(getenv('TWILIO_AUTH_TOKEN') ?: ''));
$fromWhatsApp = trim((string)(getenv('TWILIO_WHATSAPP_FROM') ?: 'whatsapp:+14155238886'));

if ($accountSid === '' || $authToken === '') {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Twilio server config missing']);
    exit;
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON body']);
    exit;
}

$toPhone = trim((string)($payload['toPhone'] ?? ''));
$message = trim((string)($payload['message'] ?? ''));

if ($toPhone === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing WhatsApp payload fields']);
    exit;
}

$normalizedTo = preg_replace('/\s+/', '', $toPhone) ?? '';
if (!preg_match('/^\+\d{8,15}$/', $normalizedTo)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid destination phone format']);
    exit;
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
]);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$statusCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($response === false) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => $curlError !== '' ? $curlError : 'Twilio request failed']);
    exit;
}

http_response_code($statusCode >= 200 && $statusCode < 300 ? 200 : $statusCode);
echo $response;
