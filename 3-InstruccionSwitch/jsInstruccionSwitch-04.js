function mostrar()
{

	let cMes
	
	cMes = document.getElementById("txtIdMes").value;
	


switch (cMes) {
	case "Enero" : case "Marzo" : case "Mayo" : case "Julio": case "Agosto" : case "Octubre": case "Diciembre":
		alert("Tiene 31 dias");
		break;		
	case "Febrero":
		alert("Tiene 28 dias");
		break;
	default:
		alert("Tiene 30 dias");
		break;
}	
	



}//FIN DE LA FUNCIÓN