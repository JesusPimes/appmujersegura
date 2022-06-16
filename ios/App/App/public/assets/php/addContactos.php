<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';
$fecha = date("d-m-Y H:i:s");

$post  	= file_get_contents("php://input");
$requ  	= json_decode($post);

$correo    = $requ->correoUser;  

$nombre1	= $requ->nombre1;
$telefono1	= $requ->telefono1;
$parentesco1    = $requ->parentesco1;

$nombre2    = $requ->nombre2;
$telefono2    = $requ->telefono2;
$parentesco2    = $requ->parentesco2;




$queryDelete = "DELETE FROM contactos WHERE correoUser='".$correo."'";


if (mysqli_query($conn, $queryDelete)) {


    $json = array(
        "status" => true
    );
} else {
    $json = array(
        "status" => false,
        "sql" => $query
    );
}



 
              $query="INSERT INTO contactos 
                        SET 
                            correoUser='".$correo. "',
                            nombre='" . $nombre1 . "',
                            telefono='" . $telefono1 . "',
                            parentesco='" . $parentesco1 . "'
                            
                            
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

if($nombre2==""){

}else{
    $query2 = "INSERT INTO contactos 
                        SET 
                            correoUser='" . $correo . "',
                            nombre='" . $nombre2 . "',
                            telefono='" . $telefono2 . "',
                            parentesco='" . $parentesco2 . "'
                            
                            
                    ";


    if (mysqli_query($conn, $query2)) {


        $json = array(
            "status" => true
        );
    } else {
        $json = array(
            "status" => false,
            "sql" => $query2
        );
    }
}



echo json_encode($json);



?>
