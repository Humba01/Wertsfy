/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function ConverMBytesBits() {

  var clazz = {

    uso: function(x) {

      var total = 0;

      for(var i = 0; i < x.length; i++) {
        total = total + x[i]; 
      }

      totalp = (total * 8) * 1024 ** 2;

      return totalp;
    }
  };

  return clazz;
}