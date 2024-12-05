<?php
$courses = [
    'BTech' => ['Machine Learning', 'Database', 'AI'],
    'MBATech' => ['Computer Network', 'Deep Learning', 'Management Information System']
];

if (isset($_POST['degree'])) {
    $degree = $_POST['degree'];
    if (array_key_exists($degree, $courses)) {
        echo json_encode($courses[$degree]);
    } else {
        echo json_encode([]);
    }
}
?>
