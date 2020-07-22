function mostrar()
{
	//tomo la edad  
	let nEdad;
	let nEstadoCivil;

	nEdad=parseInt(document.getElementById("txtIdEdad").value);
	nEstadoCivil=document.getElementById("estadoCivil").value;
	
	if (nEdad>=18 && nEstadoCivil=="Soltero") {
		
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN