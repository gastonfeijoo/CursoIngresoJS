function mostrar()
{

	let nNumero;
	let nDivisores;
	nDivisores=0;
	
	nNumero=parseInt(prompt("Ingrese un numero"));
	
	for (let i=1;i<=nNumero;i++){
		if (nNumero%i==0){
			nDivisores++
			console.log(i)
		}
	
	}
	alert("La cantidad de divisores es "+nDivisores)


}//FIN DE LA FUNCIÓN