/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    /*
	<input type="text"  placeholder="Ingrese Precio" id="txtIdPrecioUno">
	<input type="text"  placeholder="Ingrese Precio" id="txtIdPrecioDos">
    <input type="text"  placeholder="Ingrese Precio" id="txtIdPrecioTres">
    */

function Sumar () 
{
let nPrecioUno;
let nPrecioDos;
let nPrecioTres;
let nResultado;

nPrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
nPrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
nPrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

nResultado = nPrecioUno+nPrecioDos+nPrecioTres;

alert("La suma de los precios es $"+ nResultado.toFixed(2));
}
function Promedio () 
{
let nPrecioUno;
let nPrecioDos;
let nPrecioTres;
let nResultado;

nPrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
nPrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
nPrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

nResultado = (nPrecioUno+nPrecioDos+nPrecioTres)/3;

alert("El Promedio de los precios es $"+ nResultado.toFixed(2));
}
function PrecioFinal () 
{
    let nPrecioUno;
    let nPrecioDos;
    let nPrecioTres;
    let nResultado;
    
    nPrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    nPrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    nPrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    nResultado = (nPrecioUno+nPrecioDos+nPrecioTres)*1.21;
    
    alert("El Precio Final de la suma de los precios es $"+ nResultado.toFixed(2));	
}