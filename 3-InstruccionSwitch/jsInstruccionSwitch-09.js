/*txtIdEstacion
txtIdDestino
	una agencia de viajes debe sacar las tarifas de los viajes
					, se cobra $15.000 por cada estadia como base,
					 se pide el ingreso de una estacion del año y localidad para vacacionar para
					poder  calcular el precio final


				</br> </br>en Invierno:
				 	bariloche tiene un aumento del 20% 
					cataratas y Cordoba tiene un descuento del 10%
					Mar del plata  tiene un descuento del 20%

				</br></br> en Verano:
				 	bariloche tiene un descuento del 20% 
					cataratas y Cordoba tiene un aumento del 10%
					Mar del plata  tiene un aumento del 20%

				</br></br> en Otoño y Primavera:
				 	bariloche tiene un aumento del 10% 
					cataratas tiene un aumento del 10%
					Mar del plata  tiene un aumento del 10%
					y Cordoba tiene el precio sin descuento
*/

function mostrar() {
	let cEstacion;
	let cDestino;
	const PRECIO = 15000;
	let nDescuentoAumento;
	let nPrecioFinal;

	cEstacion = document.getElementById("txtIdEstacion").value;
	cDestino = document.getElementById("txtIdDestino").value;

	

	switch (cEstacion) {
		case "Invierno":
			if (cDestino == "Bariloche") {
				nDescuentoAumento = PRECIO * .2;
				nPrecioFinal = PRECIO + nDescuentoAumento;
			}
			else if (cDestino == "Mar del plata") {
				nDescuentoAumento = PRECIO * .2;
				nPrecioFinal = PRECIO - nDescuentoAumento;
			}
			else {
				nDescuentoAumento = PRECIO * .1;
				nPrecioFinal = PRECIO - nDescuentoAumento;

			}
			break;
		case "Verano":
			if (cDestino == "Bariloche") {
				nDescuentoAumento = PRECIO * .2;
				nPrecioFinal = PRECIO - nDescuentoAumento;
			}
			else if (cDestino == "Mar del plata") {
				nDescuentoAumento = PRECIO * .2;
				nPrecioFinal = PRECIO + nDescuentoAumento;
			}
			else {
				nDescuentoAumento = PRECIO * .1;
				nPrecioFinal = PRECIO + nDescuentoAumento;
			}
			break;

		default:

			if (cDestino != "Cordoba") {
				nDescuentoAumento = PRECIO * .1;
				nPrecioFinal = PRECIO + nDescuentoAumento;						
			}
			else {
				nPrecioFinal = PRECIO;
				break;
			}
	}

	alert(`El precio final para ${cDestino} en ${cEstacion} es de ${nPrecioFinal}`)

}//FIN DE LA FUNCIÓN