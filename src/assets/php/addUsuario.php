<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';
$fecha = date("d-m-Y H:i:s");

$post  	= file_get_contents("php://input");
$requ  	= json_decode($post);

  
$nombre	= $requ->nombre;
$correo	= $requ->correo;
$password	= $requ->password;
$telefono	= $requ->telefono;





 
              $query="INSERT INTO usuarios 
                        SET nombre='".$nombre."',
                            correo='".$correo."',
                            password='".$password."',
                            telefono='".$telefono."',
                            fecha='".$fecha."'
                    ";

                   
if (mysqli_query($conn,$query)){


    $json = array(
        "status" => true
    );
}else{
    $json = array(
        "status" => false,
        "sql"=> $query
    );
}


echo json_encode($json);



?>
