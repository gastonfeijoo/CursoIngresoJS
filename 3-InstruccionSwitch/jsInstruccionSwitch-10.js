/*txtIdEstacion
txtIdDestino
 	<h2>Enunciado:</h2>
			
				<h3>
					una agencia de viajes nos piden informar si hacemos viajes a lugares según 
					la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar


				</br> </br>en Invierno:
				 	Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
				</br></br> en Verano:
				 	Se viaja a Mar del plata y Cataratas solamente
				</br></br> en Otoño:
				 	Se viaja a todos los destinos.
				</br></br> primavera:
				 	solo no se viaja a Bariloche
*/

function mostrar() {
	let cEstacion;
	let cDestino;
	let lViaja;
	cEstacion = document.getElementById("txtIdEstacion").value;
	cDestino = document.getElementById("txtIdDestino").value;
	lViaja = 0


	switch (cEstacion) {
		case "Invierno":
			if (cDestino == "Bariloche") {
				lViaja = 1
			}
			break;
		case "Verano":
			if (cDestino == "Mar del plata" || cDestino == "Cataratas") {
				lViaja = 1
			}
			break;
		case "Otoño":
			lViaja = 1
			break;
		default:

			if (cDestino != "Bariloche") {
				lViaja = 1
			}
				break;
			
	}

	if (lViaja==1) {
		alert("Se Viaja")
	}
	else {
		alert("No se Viaja")
	}

}//FIN DE LA FUNCIÓN