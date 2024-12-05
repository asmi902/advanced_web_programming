<?php
require 'setup.php';

// Function to create a user
function createUser($name, $email) {
    global $mysqli;
    $stmt = $mysqli->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $email);
    return $stmt->execute();
}

// Function to read users
function readUsers() {
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM users");
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Function to update a user
function updateUser($id, $name, $email) {
    global $mysqli;
    $stmt = $mysqli->prepare("UPDATE users SET name = ?, email = ? WHERE id = ?");
    $stmt->bind_param("ssi", $name, $email, $id);
    return $stmt->execute();
}

// Function to delete a user
function deleteUser($id) {
    global $mysqli;
    $stmt = $mysqli->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param("i", $id);
    return $stmt->execute();
}

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['create'])) {
        createUser($_POST['name'], $_POST['email']);
    }
    if (isset($_POST['update'])) {
        updateUser($_POST['id'], $_POST['name'], $_POST['email']);
    }
    if (isset($_POST['delete'])) {
        deleteUser($_POST['id']);
    }

    // Redirect back to the index page to avoid form resubmission
    header("Location: index.html");
    exit();
}
?>
