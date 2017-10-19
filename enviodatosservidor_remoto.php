<?php

$nombre = $_POST["nombre"];
$sexo = $_POST["sexo"];
$correo = $_POST["correo"];

//-----------SERVIDOR-------------------
$servidor = "localhost:3306";
$usuario = "istp4sed_remoto";
$clave = "remoto500@";
$base = "istp4sed_bdremoto";

//$conexion = mysqli_connect($servidor,$usuario,$clave,$base);
//$operacion = mysqli_query($conexion, "insert into cliente(nombre,sexo,correo) values('$nombre','$sexo','$correo')");

$mysqli = new mysqli($servidor,$usuario,$clave,$base);

$query = $mysqli->prepare("insert into cliente(nombre,sexo,correo) values('$nombre','$sexo','$correo')");
$query->execute();
$query->store_result();

$rows = $query->num_rows;

echo $rows;


//$filas = $operacion->affected_rows;

  if($rows > 0){
      echo "Datos Guardados OK!!!";
  }
  else{
      echo "Error...".$filas;
  }

mysqli_close($mysqli);

?>