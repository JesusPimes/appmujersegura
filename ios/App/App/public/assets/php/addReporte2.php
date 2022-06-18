<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';
$fecha = date("d-m-Y H:i:s");

$post  	= file_get_contents("php://input");
$requ  	= json_decode($post);

  
$nombre	= $requ->nombre;
$tiporeporte	= $requ->tiporeporte;
$reporte	= $requ->reporte;
$telefono	= $requ->telefono;
$correo	= $requ->correo;




 
              $query="INSERT INTO reporte2 
                        SET tiporeporte='".$tiporeporte."',
                            nombre='".$nombre."',
                            telefono='".$telefono."',
                            fecha='".$fecha."',
                            correo='".$correo."',
                            reporte='".$reporte."'
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
