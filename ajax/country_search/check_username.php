<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'your_database');

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

if (isset($_POST['username'])) {
    $username = $conn->real_escape_string($_POST['username']);

    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo "Username already exists";
    } else {
        echo "Username does not exist";
    }
}

$conn->close();
?>
