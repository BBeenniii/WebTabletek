<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tabletsdatabase";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT * FROM tablets";
$result = $conn->query($sql);

$tablets = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tablets[] = $row;
    }
    echo json_encode($tablets);
} else {
    echo json_encode([]);
}

$conn->close();
?>
