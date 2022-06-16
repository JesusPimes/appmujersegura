<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

/*
$post      = file_get_contents("php://input");
$requ      = json_decode($post);
*/

    $json = array();

    $data = mysqli_query($conn,"SELECT * FROM mas order by orden ASC");



while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

}

echo json_encode($json);









?>
