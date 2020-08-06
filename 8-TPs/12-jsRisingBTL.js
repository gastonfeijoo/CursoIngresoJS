/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	let nEdad;
	let cSexo;
	let nEstadoCivil;
	let nSueldoBruto;
	let nLegajo;
	let cNacionalidad;
	let cEstadoCivilText;
	let cNacionalidadText;
	let cSexoText;

	// validacion Edad
	nEdad = parseInt(prompt("Ingrese la Edad - Entre 18 y 90 inclusive"));
	while (!(nEdad >= 18 && nEdad <= 90)) {
		nEdad = parseInt(prompt("Valor No Valido - Reingrese la Edad - Entre 18 y 90 inclusive"));

	}
	// validacion Sexo
	cSexo = prompt("Ingrese el Sexo - M para Masculino y F para Femenino");
	while (cSexo.toLowerCase() != 'f' && cSexo.toLowerCase() != 'm') {
		cSexo = prompt("Valor No Valido - Reingrese el Sexo - M para Masculino y F para Femenino");

	}
	// validacion Estado Civ
	nEstadoCivil = parseInt(prompt("Ingrese el estado civil - 1.Soltero 2.Casado 3. Divorciado 4.Viudo"));
	while (nEstadoCivil < 1 || nEstadoCivil > 4 || isNaN(nEstadoCivil)) {
		nEstadoCivil = parseInt(prompt("Valor No Valido - Reingrese el estado civil - 1.Soltero 2.Casado 3. Divorciado 4.Viudo"));
	}
	// validacion Sueldo Bruto
	nSueldoBruto = parseInt(prompt("Ingrese el Sueldo Bruto - Minimo de $8000.-"));
	while (nSueldoBruto < 8000 || isNaN(nSueldoBruto)) {
		nSueldoBruto = parseInt(prompt("Valor No Valido - Reingrese el Sueldo Bruto - Minimo de $8000.-"));
	}
	// validacion legajo
	nLegajo = parseInt(prompt("Ingrese el legajo - 4 digitos partiendo de 1000"));
	while (!(nLegajo >= 1000 && nLegajo <= 9999)) {
		nLegajo = parseInt(prompt("Valor No Valido - Reingrese el legajo - 4 digitos partiendo de 1000"));

	}
	// validacion nacionalidad
	cNacionalidad = prompt("Ingrese la nacionalidad - A. Argentino E.Extranjero N.Nacionalizado");
	while (cNacionalidad.toLowerCase() != 'a' && cNacionalidad.toLowerCase() != 'e' && cNacionalidad.toLowerCase() != 'n') {
		cNacionalidad = prompt("Valor No Valido - Reingrese la nacionalidad - A. Argentino E.Extranjero N.Nacionalizado");

	}


	document.getElementById("txtIdEdad").value = nEdad;

	cSexoText=cSexo.toLowerCase();
	switch (cSexoText) {
		case "f":
			cSexoText="Femenino"
			break;
		case "m":
			cSexoText="Masculino"
			break;

	}

	document.getElementById("txtIdSexo").value = cSexoText;

	switch (nEstadoCivil) {
		case 1:
			cEstadoCivilText="Soltero"
			break;
		case 2:
			cEstadoCivilText="Casado"
			break;
		case 3:
			cEstadoCivilText="Divorciado"
			break;
		case 4:
			cEstadoCivilText="Viudo"
			break;

	}

	document.getElementById("txtIdEstadoCivil").value = cEstadoCivilText;
	document.getElementById("txtIdSueldo").value = nSueldoBruto;
	document.getElementById("txtIdLegajo").value = nLegajo;

	cNacionalidadText=cNacionalidad.toLowerCase();
	switch (cNacionalidadText) {
		case "a":
			cNacionalidadText="Argentino"
			break;
		case "e":
			cNacionalidadText="Extranjero"
			break;
		case "n":
			cNacionalidadText="Nacionalidad"
			break;


	}

	document.getElementById("txtIdNacionalidad").value = cNacionalidadText;




}


/*

 let cEstadoCivilText;
	 let cNacionalidadText;


			<input type="text" readonly placeholder="Edad validada" id="">
			<input type="text" readonly placeholder="Sexo validado" id="">
			<input type="text" readonly placeholder="Estado civil validado" id="">
			<input type="text" readonly placeholder="Sueldo bruto validado" id="">
			<input type="text" readonly placeholder="Lejago validado" id="">
			<input type="text" readonly placeholder="Nacionalida validada" id="">
*/