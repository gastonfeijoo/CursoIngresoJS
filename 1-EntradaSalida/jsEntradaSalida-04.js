/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//creo la variable
	let cNombre;
	//por un prompt asigno el valor a la variable
	cNombre=prompt("Ingrese Su Nombre");
	//asigno el valor de la variable al elemento textbox
	document.getElementById("txtIdNombre").value=cNombre;
	
}

