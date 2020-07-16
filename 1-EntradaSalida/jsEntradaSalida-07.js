/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	let nUno;
	let nDos;
	let nResultado;


	nUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	nDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	nResultado=nUno+nDos;
	alert("La suma es "+nResultado);

	
}

function restar()
{
	
	let nUno;
	let nDos;
	let nResultado;


	nUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	nDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	nResultado=nUno-nDos;
	alert("La resta es "+nResultado);

}

function multiplicar()
{ 
	let nUno;
	let nDos;
	let nResultado;


	nUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	nDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	nResultado=nUno*nDos;
	alert("La multiplicacion es "+nResultado);
}

function dividir()
{
	let nUno;
	let nDos;
	let nResultado;


	nUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	nDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	nResultado=nUno/nDos;
	alert("La division es "+nResultado);
}

