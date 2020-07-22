function mostrar()
{
	//tomo el mes

	let cMes
	
	cMes = document.getElementById("txtIdMes").value;
	
/*	

	if (cMes=="Enero") {
		alert("que comiences bien el año!!!");	
	}
	else if (cMes=="Marzo") {
		alert("a clases!!!");
	}
	else if (cMes=="Julio") {
		alert("se vienen las vacaciones!!!");
	}
	else if (cMes=="Diciembre") {
		alert("Felices fiesta!!!");
	}

*/

switch (cMes) {
	case "Enero":
		alert("que comiences bien el año!!!");
		break;
	case "Marzo":
		alert("a clases!!!");
		break;
	case "Julio":
		alert("se vienen las vacaciones!!!");
		break;
	case "Diciembre":
		alert("Felices fiesta!!!");
		break;
	default:
		break;
}	

}
//FIN DE LA FUNCIÓN