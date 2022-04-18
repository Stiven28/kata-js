<?php
/*How good are you really?  Kata 8
https://www.codewars.com/kata/5601409514fc93442500010b/train/php
Recibe una matriz con los puntajes de las pruebas de sus compañeros.
 ¡Ahora calcule el promedio y compare su puntuación!
¡ Regresa Truesi estás mejor, de lo contrario False!*/

function betterThanAverage($classPoints, $yourPoints) {
    $suma =0;
   
    foreach ($classPoints as $points) {
        $suma += $points;
    }
    $total_numeros = count($classPoints);

    $media = $suma/$total_numeros;
    
    if($yourPoints > $media){
        return true;
    }else
    return false;
  }


?>