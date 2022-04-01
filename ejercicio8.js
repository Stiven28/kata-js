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