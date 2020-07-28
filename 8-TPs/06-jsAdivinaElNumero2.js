/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let nNumeroSecreto; 
let nContadorIntentos;
let nFlag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   
	nNumeroSecreto = Math.round(Math.random() * 99+ 1 );
	alert(nNumeroSecreto);

	document.getElementById("txtIdIntentos").value=0;
    document.getElementById("txtIdNumero").focus();
	nFlag = 1;
	nContadorIntentos = 0;

	

}

function verificar()
{
let nNumeroUser

if (nFlag == 0) {
  alert("Debe presionar comenzar para empezar a jugar");  
}
else
  nNumeroUser = parseInt(document.getElementById("txtIdNumero").value);
  if (nNumeroUser==nNumeroSecreto) {
	nContadorIntentos++;
	document.getElementById("txtIdIntentos").value=nContadorIntentos;
	nFlag=0;
	switch (nContadorIntentos) {
		case 1:
			alert("usted es un Psíquico")
			break;
		case 2:
			alert("excelente percepción")
			break;
		case 3:
			alert("Esto es suerte")
			break;
		case 4:
			alert("Excelente técnica")
			break;
		case 5:
			alert("usted está en la media")
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:	
			alert("falta técnica")
			break;
		default:
			alert("afortunado en el amor!!")				
			
			break;
	}
	}
  else if (nNumeroUser>nNumeroSecreto) {
	alert(`Te pasaste`);
	nContadorIntentos++;
	document.getElementById("txtIdNumero").focus();
	document.getElementById("txtIdIntentos").value=nContadorIntentos;
  }
  else {
	alert(`Te quedaste corto`);
	nContadorIntentos++;
	document.getElementById("txtIdNumero").focus();
	document.getElementById("txtIdIntentos").value=nContadorIntentos;

  }
}