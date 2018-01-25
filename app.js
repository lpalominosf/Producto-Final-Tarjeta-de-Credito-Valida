function isValidCard(creditCardNumber) {
  do {
    /*
    *Por medio de un prompt se le pide al usuario que ingrese el número de su tarjeta.
    */
    var creditCardNumber = prompt('Ingrese el número de su tarjeta de crédito');
    /*
    *Condición para que usuario no ingrese un campo vacío.
    */
    if (creditCardNumber === '' && creditCardNumber === ' ') {
      /*
      *Los datos ingresados serán un string, que se convertira en un array de números para recorrer.
      */
      var array = creditCardNumber.split('');
    } else {
      alert('Ingrese un número válido');
    }
    /*
    *While condiciona al usuario a ingresar un número válido de tarjeta
    */
  } while (creditCardNumber === '' || creditCardNumber === ' ');
  /*Método reverse, para dejar el array al revés*/
  var arrayReverse = array.reverse();
  var newArray = []; // Nuevo arreglo, este será de números, no un string.
  /*
  *For que recorre el array en reversa
  */
  for (var i = 0; i < arrayReverse.length; i++) {
    newArray.push(parseInt(arrayReverse[i]));
  }

}//funcion

isValidCard();