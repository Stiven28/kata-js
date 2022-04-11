const createNDimensionalArray = (n,size) => {
 let matriz = [];
 let level = 'level '+ n;
 let mt = [];
    for(let i = 0; i <size; i++){
        matriz[i] = level
    }
    for(let j = 0; j<n; j++){
        mt[j] = matriz
   }
    return mt;
  }




/*

  const createNDimensionalArray = (n,size) => {
    let matriz1 = [];
    let level = 'level '+ n;
    let matriz2 = [];
     
       for(let j = 0; j<n; j++ ){
           
           for(let i = 0; i <size; i++){
               matriz1[i] = level
             matriz2.push(matriz1)
             
           }
             matriz2.push(matriz2)
              
              return matriz1;
          
       }
       
     }

     */
    //matriz.push(level);
  /*  for(let i = 0; i < size; i++){
        matriz[i] =new Array(level + " " + n);
    }

    for(let j = 0; j < n; j++ ){
     matriz[j] = new Array()
     }
    */
   [ [ 'nivel 1' ], [ 'nivel 1nivel 1' ] ]
   [ 'level 1', 'level 1' ]

     /*
   const createNDimensionalArray = (n,size) => {
    let matriz = [];
    let level = 'level'+ " " + n;
    
       for(let i = 0; i <size; i++){
           matriz[i] = level
        
           
       }
       return matriz;
     }
     https://www.codewars.com/kata/6161847f52747c0025d0349a/train/javascript
   */

  const createNDimensionalArray = (n,size) => {
    let matriz1 = [];
    let level = 'level '+ n;
    let matriz2 = [];
    let matriz3 = [];
    if(n==1){ 
        for(let j = 0; j<n; j++ ){
           
           for(let i = 0; i <size; i++){
               matriz1[i] = level
             
           }
              return matriz1;
       }
       
     }else
      if(n==2){
        for(let j = 0; j<size; j++ ){
            matriz1[j] = level
            for(let i = 0; i <size; i++){
                matriz2[i] = matriz1;
            }
               
           
        }
        return matriz2;
     }else
       if(n==3){
         for(let j = 0; j<size; j++ ){
            matriz1[j] = level
            for(let i = 0; i <size; i++){
                matriz2[i] = matriz1
                matriz3[i] = matriz2
            }
        }
         return matriz3;
       }
     
    }