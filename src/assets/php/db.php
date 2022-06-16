<?php
date_default_timezone_set("America/Monterrey");

# DATOS DE CONEXION AL A BASE DE DATOS
$servidorMysql = "localhost";
$usuarioMysql  = "nldgobmx_usernoticias";
$passwordMysql = "oMXo_hE1FpX6";
$basededatos   = "nldgobmx_appmujer";


$conn=mysqli_connect($servidorMysql, $usuarioMysql, $passwordMysql,$basededatos);
//$conn->set_charset("utf8mb4");
if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}
$conn -> set_charset("utf8");
 

 // $mysqli->query('SET NAMES utf8'); 
//mysql_select_db($basededatos) or die(mysql_error());

//echo $conn;
?>