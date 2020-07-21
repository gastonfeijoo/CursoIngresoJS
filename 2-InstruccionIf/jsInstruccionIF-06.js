function mostrar() {


	//tomo la edad  

	let nEdad;

	nEdad = parseInt(document.getElementById("txtIdEdad").value);

	if (nEdad >= 18) {
		alert("Es mayor");
	}
	else {
		if (nEdad >= 13 && nEdad <= 17) {

			alert("Es adolescente");
		}
		else {
			alert("Es niño");
		}
	}
}//FIN DE LA FUNCIÓN