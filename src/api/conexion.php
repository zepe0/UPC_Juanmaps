<?php
$server = "localhost";
$user = "root";
$pass = "";
$db = "test";
$conexion = new mysqli($server, $user, $pass, $db);
if ($conexion->connect_error) {
    die("Error" . $conexion->connect_error);
}

?>