<?php
// Database connection
$mysqli = new mysqli("localhost", "root", "", "employee");

// Check the connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>
