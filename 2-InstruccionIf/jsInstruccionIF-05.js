function mostrar()
{
	//tomo la edad  

	let nEdad;

	nEdad = parseInt(document.getElementById("txtIdEdad").value);

	if (nEdad<13 || nEdad>17) {

		alert("No Es adolescente");	
	}

	if (!(nEdad>=13 && nEdad<=17)) {

		alert("No Es adolescente");	
	}
	

}//FIN DE LA FUNCIÓN