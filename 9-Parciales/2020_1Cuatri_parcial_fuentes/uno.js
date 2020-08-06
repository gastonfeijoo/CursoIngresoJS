
function mostrar() {
	let cTipo;
	let nPrecio;
	let nCantidad;
	let cMarca;
	let cFabricante;
	let nAlcoholMasBaratoPrecio=0;
	let nAlcoholMasBaratoCantidad;
	let cAlcoholMasBaratoFabricante;
	let cMensajeMasCantidad=" es el Tipo de mayor cantidad y su promedio de compra es $";
	let nMasCantidadPromedioCompra;	

	let lAlcoholMasBaratoFlag=0;

	let nAlcoholMasCantidadCantidad=0;
	let nAlcoholMasCantidadPrecio=0;
	let nBarbijoMasCantidadCantidad=0;
	let nBarbijoMasCantidadPrecio=0;
	let nJabonMasCantidadCantidad=0;
	let nJabonMasCantidadPrecio=0;	

	for (let i = 1; i <= 5; i++) {

		cTipo = prompt("Ingreso el tipo (barbijo,jabon,alcohol)...");
		cTipo = cTipo.toLowerCase();
		while (cTipo != "barbijo" && cTipo != "jabon" && cTipo != "alcohol") {
			cTipo = prompt("Tipo Invalido - Ingreso el tipo (barbijo,jabon,alcohol)...");
			cTipo = cTipo.toLowerCase();
		}

		nPrecio = parseFloat(prompt("Ingrese el precio (Entre $100 y $300)..."));
		while (!(nPrecio >= 100 && nPrecio <= 300)) {
			nPrecio = parseInt(prompt("Precio invalido - Ingrese el precio (Entre $100 y $300)..."));
		}
		nCantidad = parseInt(prompt("Ingrese la cantidad (Entre 1 y 1000)..."));
		while (!(nCantidad >= 1 && nCantidad <= 1000)){
			nCantidad = parseInt(prompt("Cantidad Invalida - Ingrese la cantidad (Entre 1 y 1000)..."));
		}
		cMarca = prompt("Ingrese la marca");
		cFabricante = prompt("Ingrese el fabricante");

		switch (cTipo) {
			case "barbijo":
				nBarbijoMasCantidadPrecio+=nPrecio;
				nBarbijoMasCantidadCantidad+=nCantidad;
				break;

			case "jabon":
				nJabonMasCantidadPrecio+=nPrecio;
				nJabonMasCantidadCantidad+=nCantidad;

				break;

			case "alcohol":

				nAlcoholMasCantidadPrecio+=nPrecio;
				nAlcoholMasCantidadCantidad+=nCantidad;

				
				if (nPrecio < nAlcoholMasBaratoPrecio && lAlcoholMasBaratoFlag) {
					nAlcoholMasBaratoPrecio=nPrecio;
					nAlcoholMasBaratoCantidad = nCantidad;
					cAlcoholMasBaratoFabricante = cFabricante;
				}
				else if (!lAlcoholMasBaratoFlag){
					nAlcoholMasBaratoPrecio=nPrecio;
					nAlcoholMasBaratoCantidad = nCantidad;
					cAlcoholMasBaratoFabricante = cFabricante;
					lAlcoholMasBaratoFlag=1;
				}
				
				break;
		}
	}

	if(nAlcoholMasCantidadCantidad>nJabonMasCantidadCantidad && nAlcoholMasCantidadCantidad>nBarbijoMasCantidadCantidad){
		//a mayor

		//a alcohol
		//b jabon
		//c barbijo
		nMasCantidadPromedioCompra = nAlcoholMasCantidadCantidad / nAlcoholMasCantidadPrecio;

		cMensajeMasCantidad = "Alcohol "+cMensajeMasCantidad+nMasCantidadPromedioCompra;

	}
	else if(nJabonMasCantidadCantidad>nAlcoholMasCantidadCantidad && nJabonMasCantidadCantidad>nBarbijoMasCantidadCantidad)	{
		//b mayor
		nMasCantidadPromedioCompra = nJabonMasCantidadCantidad / nJabonMasCantidadPrecio;
		cMensajeMasCantidad = "Jabon "+cMensajeMasCantidad+nMasCantidadPromedioCompra;
	}
	else {
		//c mayor
		nMasCantidadPromedioCompra = nBarbijoMasCantidadCantidad / nBarbijoMasCantidadPrecio;
		cMensajeMasCantidad = "Barbijo "+cMensajeMasCantidad+nMasCantidadPromedioCompra;
	}

	
	console.log("Alcohol Mas Barato- Cantidad:"+nAlcoholMasBaratoCantidad+"- Fabricante:"+cAlcoholMasBaratoFabricante);
	console.log(cMensajeMasCantidad);
	console.log("La cantidad de unidades de jabon es "+nJabonMasCantidadCantidad);

}
