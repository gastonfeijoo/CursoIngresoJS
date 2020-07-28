function mostrar()
{


let cDestino;
cDestino = document.getElementById("txtIdDestino").value;
alert(cDestino)
switch (cDestino) {
	case "Bariloche":
		alert("Este destino se encuentra hacia el Este");
		break;
	case "Cataratas":
		break;
		alert("Este destino se encuentra hacia el Norte");
	case "Mar del plata":
		break;
		alert("Este destino se encuentra hacia el Oeste");
	case "Ushuaia":
		alert("Este destino se encuentra hacia el Sur");
		break;
}

}//FIN DE LA FUNCIÓN