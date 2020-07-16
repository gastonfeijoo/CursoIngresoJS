/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// operador % modulo - da el resto de una division entera
	//si da con 0, el modulo es el divisor.

	//txtIdNumeroDividendo
	//txtIdNumeroDivisor
	let nDividendo;
	let nDivisor;
	let nResultado;

	nDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	nDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
		
	nResultado = nDividendo%nDivisor;
		
	alert("El Resto es "+ nResultado);

	//el signo - resta 
	//typeof nos dice que data type es
}
