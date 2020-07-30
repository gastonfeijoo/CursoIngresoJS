/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {


	let nContador;
	let nNumero;
	let nSumaPos;
	let nProductoNeg;
	
	nSumaPos = 0;
	nProductoNeg = 1;
	lNegativo = 0



	do {
		
		nNumero = parseInt(prompt("Ingrese un numero"));
		if (nNumero < 0) {
			nProductoNeg = nProductoNeg * nNumero //negativos
			lNegativo=1
		}
		else {
			nSumaPos = nSumaPos + nNumero //positivos
		}

		cRespuesta = prompt("Quiere seguir ingresando numeros?");

	} while (cRespuesta == 's');

	
	if (lNegativo == 0) {
		nProductoNeg=0
	}
	
	document.getElementById("txtIdSuma").value = nSumaPos;
	document.getElementById("txtIdProducto").value = nProductoNeg;	




}//FIN DE LA FUNCIÓN