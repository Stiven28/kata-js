<?php
/*Consecutive strings Kata 6
https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/php
Se le proporciona una matriz (lista) strarrde cadenas 
y un número entero k. Su tarea es devolver la primera
 cadena más larga que consta de k cadenas consecutivas
  tomadas en la matriz.

 */

function snail(array $array): array {

    $arr = array_merge($array[0]);
    $column= count($array);
    $arr = array_column($array, $column);

}
?>


array_merge

array_colum
array_reverse

unset


foreach ($array as $key){
      

    }
    $array1= array_column($array, $key);





    <?php

$a = [4,5,6];
$b = [1,2,3];
$a = array_merge($a,$b);

$array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    
    //print_r(count($array)-1);
    //print_r($array[0]);
 
$col_2 = array_column($array, 1);
 

$reverse = array_reverse($array[2]);

//unset($array[0]);

foreach ($array as $key => $value) {
   unset($array[$key][0]);
}

print_r($array);
?>

<?php
$array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    
    $arr = array_merge($array[0]);
    unset($array[0]);
    $column= count($array);
    $arr = array_merge($arr, array_column($array, $column));
    foreach ($array as $key => $value) {
    unset($array[$key][$column]);
    }
    array_reverse($array[2]);
    print_r($array);
  //  print_r($array);
?>

