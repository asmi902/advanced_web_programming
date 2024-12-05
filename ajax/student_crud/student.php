<?php
// student.php

// Database connection
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'student_db1';

$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle AJAX requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    // Insert operation
    if ($action === 'insert') {
        $name = $_POST['name'];
        $branch = $_POST['branch'];
        $address = $_POST['address'];

        $sql = "INSERT INTO Student (Student_Name, Student_Branch, Student_Address) VALUES ('$name', '$branch', '$address')";

        if ($conn->query($sql) === TRUE) {
            echo "Student inserted successfully!";
        } else {
            echo "Error inserting student: " . $conn->error;
        }
    }

    // Update operation
    if ($action === 'update') {
        $id = $_POST['id'];
        $name = $_POST['name'];

        $sql = "UPDATE Student SET Student_Name='$name' WHERE Student_ID=$id";

        if ($conn->query($sql) === TRUE) {
            echo "Student updated successfully!";
        } else {
            echo "Error updating student: " . $conn->error;
        }
    }

    // Select operation
    if ($action === 'select') {
        $result = $conn->query("SELECT * FROM Student");

        if ($result->num_rows > 0) {
            $students = array();
            while ($row = $result->fetch_assoc()) {
                $students[] = $row;
            }
            echo json_encode($students);
        } else {
            echo json_encode([]);
        }
    }
}

$conn->close();
?>
