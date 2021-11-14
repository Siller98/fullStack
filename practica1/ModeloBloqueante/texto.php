<?php
printf("Abriendo Archivo");

$archivo_url = fopen("../archivo.txt", "r");

$texto = "";
$tiempo_inicial = microtime(true);
while($fragmento = fgets($archivo_url)){
    $texto .= $fragmento;
}

printf($texto);
$tiempo_final = microtime(true);
printf("<br>Haciendo otra cosa");

$tiempo = $tiempo_final - $tiempo_inicial;
	
echo "El tiempo de ejecución del archivo ha sido de " . $tiempo . " segundos";
?>