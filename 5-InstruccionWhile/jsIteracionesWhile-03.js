/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let cClave;
	let nIntentos;
	nIntentos = 1;
	lFlag = 0;

	cClave = prompt("Ingrese la Clave...");

	while (cClave != "utn750") {

		cClave = prompt("La clave es incorrecta...");
		nIntentos++;
		if (nIntentos >= 3) {
			alert("Supero la Cantidad de intentos...");
			break;
		}
	}
	if (lFlag == 1) {
		alert("La clave es correcta");
	}

}//FIN DE LA FUNCIÓN

