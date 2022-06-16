<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

/*
$post      = file_get_contents("php://input");
$requ      = json_decode($post);
*/

    $json = array();
    $q="SELECT * FROM flayers where idmodulo='".$_GET['id1']."' and idsubmodulo='".$_GET['id2']."' order by id DESC";
   // echo $q;
    $data = mysqli_query($conn,$q);



while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

}

echo json_encode($json);









?>
