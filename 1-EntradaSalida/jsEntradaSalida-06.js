/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let nUno;
	let nDos;
	//let cUno;
	//let cDos;
	let nSuma;
	//cUno = document.getElementById("txtIdNumeroUno").value;
	//cDos = document.getElementById("txtIdNumeroDos").value;
	
	//no usar la capacidad de JS de variables dinamicas.

	//nUno=parseInt(cUno);
	//nDos=parseInt(cDos);

	//Si la variable va a ser number parsear directamente la variable

	nUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	nDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	//nSuma = parseInt(nUno)+parseInt(nDos); asi lo hice primero. Mejor
	//convertir la variable por si la tengo que seguir usando luego
	//nSuma = parseFloat(nUno)+parseFloat(nDos);
	
	nSuma=nUno+nDos;
	alert("La suma es "+nSuma);
	
	//sin variable
	//alert("La suma es "+(parseInt(document.getElementById("txtIdNumeroUno").value)+parseInt(document.getElementById("txtIdNumeroDos").value)));
	
	/*el + hace
	str+str=str
	str+num=str
	num+num=num

	undefined + undefined = NaN (not a number)
	parsefloat
	parseint

	el parse va caracter a caracter...corta cuando encuentra un caracter
	o sea 12xxx devuelve 12 pero xxx12 devuelve NaN
	*/
}

