<?php
// Database connection details
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'student_database';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if CGPA is provided
if (isset($_GET['cgpa'])) {
    $cgpa = floatval($_GET['cgpa']); 

    // Query to filter students by CGPA
    $sql = "SELECT name, cgpa FROM students WHERE cgpa >= ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("d", $cgpa);
    $stmt->execute();

    // Fetch results
    $result = $stmt->get_result();
    $students = array();
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }

    // Return results as JSON
    echo json_encode($students);
} else {
    echo json_encode([]); 
}

$conn->close();
?>
