function mostrar()
{
	let nNumero;
	let nPrimo;
	let cMensaje;
	nPrimo=0;
	cMensaje=" es primo"
	
	nNumero=parseInt(prompt("Ingrese un numero"));
	while (isNaN(nNumero)){
		nNumero=parseInt(prompt("No es un numero...ingrese un numero"));
	}

	for (let i=2;i<nNumero;i++){
		if (!(nNumero%i)) {
		//if (nNumero % i==0){
			nPrimo=1;
			break;
		//	nPrimo++
		//	console.log(i)
		}
	
	}
	if (nPrimo || nNumero<=1) {
	//	if (nPrimo>1 || nNumero<=1) {
	cMensaje= " no"+cMensaje;
	}
	alert(nNumero+cMensaje);

}//FIN DE LA FUNCIÓN