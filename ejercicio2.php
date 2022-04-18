<?php
/*Find the divisors! Kata 7
 https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/php
 Cree una función llamada divisors/ Divisorsque tome un número 
 entero n > 1y devuelva una matriz con todos los divisores del 
 número entero (excepto el 1 y el número en sí), desde el más 
 pequeño hasta el más grande. Si el número es primo, devuelva la
  cadena '(entero) es primo' ( nullen C#) (use Either String aen 
  Haskell y Result<Vec<u32>, String>en Rust).
 */

function divisors($integer) {
    $array = array();
  
    for($i = 2; $i<$integer; $i++ ){
            if($integer % $i ==0){
                array_push($array, $i);
            }
        }
        if(!empty($array)){
            return $array;
        }
         return "$integer is prime";
  }

?>