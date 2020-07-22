function mostrar()
{
	//tomo la edad  
	let nEdad;
	let nEstadoCivil;

	nEdad=parseInt(document.getElementById("txtIdEdad").value);
	nEstadoCivil=document.getElementById("estadoCivil").value;
	
	if (nEdad<18 && nEstadoCivil!="Soltero") {
		
		alert("Es muy pequeño para no ser soltero");
	}

	


}//FIN DE LA FUNCIÓN