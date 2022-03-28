/* If you can't sleep, just count sheep!!
 https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
 Dado un entero no negativo, 3por ejemplo, devolver una cadena con un murmullo:
  "1 sheep...2 sheep...3 sheep...". La entrada siempre será válida, es decir, 
  no habrá números enteros negativos.
 */

  var countSheep = function (num){
    
    let n = [];
    for(let i = 0; i<num; i++){
       
       n[i] = (num[i] +" sheep...");
            
    }
    return n;
  }