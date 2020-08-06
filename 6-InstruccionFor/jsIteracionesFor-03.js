function mostrar()
{

	let nRepeticiones

	nRepeticiones=parseInt(prompt("Cuantas veces quiere mostrar el mensaje?"));

	while(isNaN(nRepeticiones)){
		nRepeticiones=parseInt(prompt("Ingrese un numero. Cuantas veces quiere mostrar el mensaje?"));
	}

	for (let i=1;i<=nRepeticiones;i++){
		console.log("Hola UTN FRA")
	}

	

}//FIN DE LA FUNCIÓN