/*Create Phone Number
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
Escriba una función que acepte una matriz de 10 enteros (entre 0 y 9), 
que devuelva una cadena de esos números en forma de número de teléfono.
*/ 

function createPhoneNumber(numbers){
    
    let numOne = numbers.splice(0,3)
    
    let numtwo = numbers.splice(0,3)


 return "("+numOne.join('')+")" +" "+ numtwo.join('')+"-" + numbers.join('');
}