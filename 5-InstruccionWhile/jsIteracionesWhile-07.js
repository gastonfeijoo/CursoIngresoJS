
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let nContador;
	let nSuma;
	let nNumero;
	let cRespuesta
	nContador=0;
	nSuma=0;
	

	do { 
		nContador++;
		nNumero = parseInt(prompt("Ingrese un numero"));
		nSuma = nSuma + nNumero;
		cRespuesta = prompt("Quiere seguir sumando?");
		
	} while (cRespuesta == 's');

	document.getElementById("txtIdSuma").value=nSuma;
	document.getElementById("txtIdPromedio").value=nSuma/nContador;



}//FIN DE LA FUNCIÓN