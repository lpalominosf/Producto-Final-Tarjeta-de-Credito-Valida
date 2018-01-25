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
      *Los datos ingresados serán un string, que se convertira en un array para recorrer.
      */
      var arr = creditCardNumber.split('');
    } else {
      alert('Ingrese un número válido');
    }
    /*
    *While condiciona al usuario a ingresar un número válido de tarjeta
    */
  } while (creditCardNumber === '' || creditCardNumber === ' ');
}

isValidCard();