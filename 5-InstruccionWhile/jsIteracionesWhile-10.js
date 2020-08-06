/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let cRespuesta;
	let nInput;
	let nSumaPos;
	let nSumaNeg;
	let nCantPos;
	let nCantNeg;
	let nCantCero;
	let nCantPar;
	let nPromedioPos;
	let nPromedioNeg;
	let nDifPosNeg;

	nInput = 0;
	nSumaPos = 0;
	nSumaNeg = 0;
	nCantPos = 0;
	nCantNeg = 0;
	nCantCero = 0;
	nCantPar = 0;

	do {
		nInput = parseInt(prompt("Ingrese un numero..."));

		//chequeo si es par/impar
		if (nInput % 2 == 0) {
			nCantPar++;
		}
		//chequeo si es cero
		if (nInput == 0) {
			nCantCero++;
			nCantPos++;
		}
		else if (nInput > 0) {
			//positivos
			nSumaPos += nInput;
			nCantPos++;
		} else {
			//negativos
			nSumaNeg += nInput;
			nCantNeg++;
		}

		cRespuesta = prompt("Desea continuar...?")
	} while (cRespuesta == 's');

	if (nCantPos==0) {
		nPromedioPos=0
	} else {
		nPromedioPos = nSumaPos / nCantPos;		
	}
	if (nCantNeg==0){
		nPromedioNeg=0		
	}
	else{
		nPromedioNeg = nSumaNeg / nCantNeg;
	}
	nDifPosNeg = nSumaPos - nSumaNeg;

	document.write("Resultados...</br>1 - La suma de negativos es " + nSumaNeg + "</br>2 - La suma de positivos es " + nSumaPos + "</br>3 - La cantidad de positivos es " + nCantPos + "</br>4 - La cantidad de negativos " + nCantNeg + "</br>5 - La cantidad de ceros es " + nCantCero + "</br>6 - La cantidad de numeros pares es " + nCantPar + "</br>7 - El promedio de positivos es " + nPromedioPos + "</br>8 - El promedio de negativos es " + nPromedioNeg + "</br>9 - La diferencia entre positivos y negativos es " + nDifPosNeg);

}//FIN DE LA FUNCIÓN