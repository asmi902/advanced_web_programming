<?php
$conn = new mysqli('localhost', 'root', '', 'course_enrollment');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $conn->real_escape_string($_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $degree = $conn->real_escape_string($_POST['degree']);
    $course = $conn->real_escape_string($_POST['course']);

    $query = "INSERT INTO users (username, password, degree, course) VALUES ('$username', '$password', '$degree', '$course')";
    if ($conn->query($query) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

$conn->close();
?>
