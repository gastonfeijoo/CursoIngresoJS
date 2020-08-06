/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let cSexo;
	
	cSexo = prompt("Ingrese el sexo...").toLowerCase;

	while (cSexo !="f" && cSexo !="m") {
		cSexo = prompt("Sexo Invalido...Ingrese el sexo...");
	}

	document.getElementById("txtIdSexo").value=cSexo;

	//isNaN()
	//Lower case
	

}//FIN DE LA FUNCIÓN