<?php
header('Content-Type: application/json');

$books = ["HTML", "XML", "JSP", "Servlet"];
echo json_encode($books);
?>
