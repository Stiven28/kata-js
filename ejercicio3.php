<?php
/*Bit Counting  Kata 6
https://www.codewars.com/kata/526571aae218b8ee490006f4/train/php
Escriba una función que tome un número entero como entrada y devuelva
 el número de bits que son iguales a uno en la representación binaria 
 de ese número. Puede garantizar que la entrada no sea negativa.

Ejemplo : la representación binaria de 1234es 10011010010, por lo que 
la función debería regresar 5en este caso
*/

function countBits($n) {
    $binario = decbin($n);
     
     return substr_count($binario,1);
 }
 
?>