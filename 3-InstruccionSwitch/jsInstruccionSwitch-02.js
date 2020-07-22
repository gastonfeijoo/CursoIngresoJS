function mostrar()
{
	//tomo el mes
	//tomo el mes

	let cMes
	
	cMes = document.getElementById("txtIdMes").value;
	


switch (cMes) {
	case "Enero" : case "Febrero" : case "Marzo" : case "Abril": case "Mayo" : case "Junio":
		alert("Falta para el Invierno");
		break;		
	case "Julio": case "Agosto":
		alert("Abrigate que hace frio");
		break;
	default:
		alert("Ya pasamos el frio, ahora calor!!!");
		break;
}	



}
//FIN DE LA FUNCIÓN