function mostrar()
{
	//tomo la hora
	let nHoraDelDia
	nHoraDelDia=parseInt(document.getElementById("txtIdHora").value);
	
	switch (nHoraDelDia) {
		case 7: case 8: case 9: case 10: case 11:
			alert("Es de Mañana");	
			break;
	
	}

}//FIN DE LA FUNCIÓN