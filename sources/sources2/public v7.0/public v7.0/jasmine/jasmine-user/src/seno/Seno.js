/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function Seno() {
  
  var clazz = {

    uso: function(x) {

      var total = 0;

      for(var i = 0; i < x.length; i++) {
        total = total + x[i];

      }

      totalp = Math.round(Math.sin(total * Math.PI / 180) * 100000000) / 100000000;

      return totalp;
    }
  };

  return clazz;
}