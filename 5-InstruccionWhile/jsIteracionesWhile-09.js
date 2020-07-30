/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

				<INPUT type="text" placeholder="El M&aacute;ximo" id="" readonly>
				<INPUT type="text" placeholder="El M&iacute;nimo" id="" readonly>
		
	   		
		
					Al presionar el bot&oacute;n pedir  n&uacute;meros  hasta que el usuario quiera,
					mostrar el número máximo y el número mínimo ingresado.

*/
function mostrar() {
	let cRespuesta;
	let nMaximo;
	let nMinimo;
	let nNumero;
	let lFlag;
	lFlag = 0;

	do {

		nNumero = parseInt(prompt("Ingrese un numero..."))
		if (lFlag == 0 || nNumero > nMaximo) {
			nMaximo = nNumero;
					
		}
		if (lFlag == 0 || nNumero < nMinimo) {
			nMinimo = nNumero;
			lFlag = 1;
		}

		cRespuesta = prompt("Desea continuar?");

	} while (cRespuesta == 's');

	document.getElementById("txtIdMaximo").value = nMaximo;
	document.getElementById("txtIdMinimo").value = nMinimo;

}//FIN DE LA FUNCIÓN