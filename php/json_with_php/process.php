<?php
// Read raw POST data
$data = file_get_contents('php://input');

// Decode JSON data
$decoded = json_decode($data, true);

if ($decoded) {
    // Prepare a response JSON
    $response = [
        'message' => 'Form data received successfully',
        'data' => $decoded
    ];

    // Set Content-Type to JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Handle invalid JSON input
    header('Content-Type: application/json');
    echo json_encode(['message' => 'Invalid JSON input']);
}
?>
