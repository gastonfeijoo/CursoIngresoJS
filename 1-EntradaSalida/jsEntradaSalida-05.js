/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let cNombre;
	let nEdad;
	cNombre=document.getElementById("txtIdNombre").value;
	nEdad=document.getElementById("txtIdEdad").value;
	//alert("Usted se llama "+cNombre+" y tiene "+nEdad+" años");
	/// nueva manera - template string con backtick
	alert(`Usted se llama ${cNombre} y tiene ${nEdad} años`);
}
