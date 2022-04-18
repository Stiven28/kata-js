<?php
/* Remove anchor from URL Kata 6
https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/php
Complete la función/método para que devuelva la url con algo después
 de #quitar el ancla ().
*/
function replaceAll($string) {
    if(stripos($string, '#')){
        $p = stripos($string, '#');
        return substr($string, 0, $p);
   }
    return $string;
}
?>