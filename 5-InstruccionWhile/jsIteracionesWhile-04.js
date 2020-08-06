/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	
	let nNumero;
	
	nNumero = parseInt(prompt("Ingrese un numero de 0 a 9..."));

	while (!(nNumero >=0 && nNumero <=9)) {
		nNumero = parseInt(prompt("Numero incorrecto, ingrese un numero de 0 a 9..."));
	}

	document.getElementById("txtIdNumero").value=nNumero;

	//isNaN()
	





}//FIN DE LA FUNCIÓN