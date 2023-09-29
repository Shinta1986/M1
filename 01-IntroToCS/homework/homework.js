'use strict';

function BinarioADecimal(num) {
   var bit = num.split(''); //Dividir el string 
   var res = 0;  //Respuesta
   for (let i = 0; i < bit.length; i++){
      res = res + (bit[i]*(2**((bit.length)-(i+1))))  //r = r + (Posicion*(2^tamaño string))
   }
   return res
}

function DecimalABinario(num) {
   var bit = ([]);   // string
   var div = num;    // resto
   for (let i = 0; 0 != div; i++){
      bit.unshift(Math.floor(div % 2));  //Se obtiene e restante y se acerca al 0 o al 1
      div = Math.floor(div / 2); //Se divide en 2 y se acerca al entero menor
  }
  
  var resBit = bit.join('');  //Agrupar todo el arreglo en un string
  return resBit
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
