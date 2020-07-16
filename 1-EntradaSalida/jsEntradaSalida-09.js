/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//txtIdSueldo
	//txtIdResultado
	//multicursor con alt!!!!

	let nSueldo;
	let nNuevoSueldo;
	let nAumento
	
	nSueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	nAumento = nSueldo * 10 / 100;
	nNuevoSueldo = nSueldo + nAumento
	
	document.getElementById("txtIdResultado").value = nNuevoSueldo.toFixed(2);

	//toFixed limita decimales
	// Math.ceil  redondeda arriba
	// Math.floor redondea abajo
	// Math.round redondea



	
}
