/*Prime Factors
https://www.codewars.com/kata/542f3d5fd002f86efc00081a

nspirado en uno de los TDD Kata del tío Bob

Escribe una función que genere factores para un número dado.

La función toma una integerentrada estándar y devuelve una lista
 de enteros (ObjC: matriz de NSNumbers que representan enteros).
  Esa lista contiene los factores primos en secuencia numérica.
*/ 



function prime_factors(n) {
  let array = [];
   if(n>1){ 
       for(var i=2; i<=n; i++ ){
           while(n % i ===0){
              n = n /i
              array.push(i);
               }
       }
   }
     return array;
   }