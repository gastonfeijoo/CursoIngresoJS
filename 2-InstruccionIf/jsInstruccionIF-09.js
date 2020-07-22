function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let nNumeroRandom;
	let nMinimo;
	let nMaximo;

	nMinimo=1;
	nMaximo=10;


	nNumeroRandom=Math.round(Math.random() * (nMaximo-nMinimo)+nMinimo);

	alert(nNumeroRandom);	

}


//FIN DE LA FUNCIÓN