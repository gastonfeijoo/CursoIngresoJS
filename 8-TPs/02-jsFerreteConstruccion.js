/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*
<input type="text"  placeholder="Largo del terreno" id="txtIdLargo">
<input type="text"  placeholder="Ancho del terreno" id="txtIdAncho">
<input type="text"  placeholder="Radio del terreno" id="txtIdRadio">
*/

function Rectangulo() {
    let nLargo;
    let nAncho;
    let nResultado;

    nLargo = parseFloat(document.getElementById("txtIdLargo").value);
    nAncho = parseFloat(document.getElementById("txtIdAncho").value);

    nResultado = ((nLargo + nAncho) * 2) * 3;

    alert("La cantidad de alambre es " + nResultado.toFixed(2) + " metros");

}
function Circulo() {

    let nRadio;
    let nResultado;
    const PI = 3.14;
    // constantes se declaran e inicializan en la misma sentencia
    // las constantes van en MAYUSCULAS
    // si son varias palabras se separan con _
    

    nRadio = parseFloat(document.getElementById("txtIdRadio").value);

    nResultado = (2 * PI * nRadio)  * 3;

    alert("La cantidad de alambre es " + nResultado.toFixed(2) + " metros");
}
function Materiales() {

    let nLargo;
    let nAncho;

    let nResultadoCemento;
    let nResultadoCal;

    const PROPORCION_CAL = 3
    const PROPORCION_CEMENTO = 2

    nLargo = parseFloat(document.getElementById("txtIdLargo").value);
    nAncho = parseFloat(document.getElementById("txtIdAncho").value);


    nResultadoCemento = (nLargo * nAncho) * PROPORCION_CEMENTO;
    nResultadoCal = (nLargo * nAncho) * PROPORCION_CAL;

    //alert("La cantidad de cal es " + nResultadoCal.toFixed(2) + " y la cantidad de cemento es " + nResultadoCemento.toFixed(2));
    alert(`La cantidad de bolsas de cal es ${nResultadoCal.toFixed(2)} y la cantidad de bolsas de cemento es ${nResultadoCemento.toFixed(2)}`)
    //template string
}