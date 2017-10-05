function answer(userAnswer){
	do{
		var answer = prompt("Ingrese el número de su tarjeta"); // Se le pregunta al usuario, por medio de un prompt, que ingrese el numero de su tarjeta
		if(answer != ""){
			if(answer == typeof('number')){ // si el usuario responde con solamente numeros, se ejecuta la función isValidCard
				isValidCard();
			} else {
				alert("Ingrese una opción válida"); // En caso de que el usuario no ingrese nada o ingrese una letra en pantalla aparecerá una alerta que le dira que ingrese una opción válida.
			}
		}
	}while(answer == "");
}



function isValidCard(){
	var creditCardNumber = answer;
	var digit = 0
	

	for (var i = 0; i < creditCardNumber.length; i++) { //Este for, recorre todos los numeros que entrega el array, con la respuesta del usuario 
  		var item = creditCardNumber.pop();
  		creditCardNumber.splice(i, 0, item);
		}
		if(i % 2==1){ // Este if condiciona que la posicion devuelta por el array, sea la que se encuentra en número par 
			digit = digit *2; 

		}	



		alert("Es válida");

}

answer();