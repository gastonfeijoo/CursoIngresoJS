function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let nNumeroRandom;
	let nMinimo;
	let nMaximo;

	nMinimo=1;
	nMaximo=10;


	nNumeroRandom=Math.round(Math.random() * (nMaximo-nMinimo)+nMinimo);

	if (nNumeroRandom>=9) {
		alert("EXCELENTE - Su nota es "+nNumeroRandom);	
	}
	else if (nNumeroRandom>=4 && nNumeroRandom<=8) {
		alert("APROBO - Su nota es "+nNumeroRandom);
	}
	else
	{
		alert("VAMOS! LA PROXIMA SE PUEDE - Su nota es "+nNumeroRandom);
	}

	

}//FIN DE LA FUNCIÓN