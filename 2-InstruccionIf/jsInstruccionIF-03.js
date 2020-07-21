function mostrar()
{
	//tomo la edad  
	let nEdad;

	nEdad = parseInt(document.getElementById("txtIdEdad").value);

	if (nEdad>=21) {
		alert("Es mayor de edad");	
	}	
	else {
		
		alert("Es menor de edad");	
	}

}//FIN DE LA FUNCIÓN