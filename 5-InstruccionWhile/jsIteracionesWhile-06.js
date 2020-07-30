function mostrar()
{

	let i;
	let nNumero;
	let nSuma;
	let nPromedio;
	i=0;
	nSuma=0;

	while (i<5) {
		i++
		nNumero=parseInt(prompt("Ingrese el Numero "+i));
		nSuma=nSuma+nNumero;
	}
	nPromedio=nSuma/i;
	document.getElementById("txtIdSuma").value = nSuma
	document.getElementById("txtIdPromedio").value = nPromedio

}//FIN DE LA FUNCIÓN

//LA DIFERENCIA ENTRE ACUMULADOR Y CONTADOR ES QUE EN LA PRIMERA ACUMULO UNA VARIABLE Y EN EL CONTADOR ACUMULO UNA CONSTANTE O NUMERO FIJO
