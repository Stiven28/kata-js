          const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
         + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
         + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
         + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
         + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
         + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
         + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
         + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
         + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
         + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
         + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
         + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"
       
       
       const code = "OH 43071,NY 56432,ZP 32908,AE 56210,RE 13000,EX 34342,SW 43098,AA 45521,GG 30654,ZP 32908,AE 56215,RE 13200,EX 34345,"
            + "RE 13222,RE 13001,SW 43198,AA 45522,GG 30655,XX 32321,YY 45098"
       
         function travel(r, zipcode) {

          let ad_arr =  r.split(',')  // Separamos la cadena en cada coma
          let answer = {}                // declaramos un objeto
          
          
          for (addres in ad_arr){  // Se iterara sobre las propiedades del objeto
            
             code = ad_arr[addres].substr(ad_arr[addres].length -8) //zipcode
            if( code != undefined && zipcode != undefined && code == zipcode){
              parts = ad_arr[addres].split(' ') // separamos el array en espacios y se le asigna la variable  parts
              number = parts[0] //  eliminamos los espcios en blanco, iniciando desde la posicion 0 y se le asigna a la variable number
              beginning = number.length +1  // medimos la longitud de number, se le suma una posicion y se le asigna a la variable beginning
              positions = ad_arr[addres].length -(9 + beginning) // A la direccion se le resta, 
       
              street = ad_arr[addres].substr(beginning,positions) // Se da el indice y la cantidad de positions que se van a extraer del array, se le asigna  a street
              
        
              if(!answer[code]){ // Si answer no tiene el codigo postal 
                  answer[code] = [ [],[] ]; // Se asigna al array
              }
              answer[code][0].push(street)  // Se asigna en la posicion 0 de code, street 
              answer[code][1].push(number) // Se asigna en la posicion 1 de code, los elementos de number
                                    
            }
              
          }
        
          if(answer[zipcode]){ // si el objeto contiene el codigo postal
            return zipcode + ':'+ answer[zipcode][0].join(',')+ '/'+ answer[zipcode][1].join(','); // retornara el codigo postal concatenando el objeto answer, se concatena todos lol elementos del vector en un string
          }
           
          return zipcode + ':/'; 
           
       }