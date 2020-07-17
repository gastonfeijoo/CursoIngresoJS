/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let nImporte;
	let nNuevoImporte;
	let nDescuento
	
	nImporte = parseFloat(document.getElementById("txtIdImporte").value);
	nDescuento = nImporte*.75;
	nNuevoImporte = nImporte - nDescuento;
	
	document.getElementById("txtIdResultado").value = nNuevoImporte;
		
	
}
