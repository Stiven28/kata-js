/*Pascal's Triangle #2
 Aquí crearás el clásico triángulo de Pascal .
A su función se le pasará la profundidad del triángulo y su código tiene que devolver el triángulo pascal correspondiente hasta esa profundidad.

El triángulo debe devolverse como una matriz anidada. Por ejemplo:
*/

function pascal(depth) {
  let array = [];
  for(let i=1; i<=depth; i++){
    array.push(Array(i).fill(1)) 
  }
  
  return array;
  
}