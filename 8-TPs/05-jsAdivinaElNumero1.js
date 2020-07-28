/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let nNumeroSecreto; 
let nContadorIntentos;
let nFlag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   
    nNumeroSecreto = Math.round(Math.random * 99+ 1 );
    document.getElementById("txtIdNumero").focus()

		//alert(numeroSecreto );
	

}

function verificar()
{
let nNumeroUser

if (nFlag = 0) {
  alert("Debe presionar comenzar para empezar a jugar")  
}
else
  nNumeroUser = parseInt(document.getElementById("txtIdNumero").value)
  if (nNumeroUser==nNumeroSecreto) {
    alert(`Usted es el ganador y en solo`)
  }
  else if (nNumeroUser>nNumeroSecreto) {
    alert(`Usted es el ganador y en solo`)
  }
  else {


  }
}