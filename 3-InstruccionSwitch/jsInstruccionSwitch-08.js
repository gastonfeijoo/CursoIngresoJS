function mostrar()
{

	let cDestino;
	cDestino = document.getElementById("txtIdDestino").value;
	
	switch (cDestino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frio");
			break;		
		case "Cataratas":		
		case "Mar del plata":
			alert("Hace Calor");
			break;

	}

}//FIN DE LA FUNCIÓN