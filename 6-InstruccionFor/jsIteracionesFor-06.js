function mostrar()
{
let nNumero;
let nPares;
nPares=0;

nNumero=parseInt(prompt("Ingrese un numero"));

for (let i=1;i<=nNumero;i++){
	if (i%2==0){
		nPares++
		console.log(i)
	}

}
alert("La cantidad de pares es "+nPares)

}//FIN DE LA FUNCIÓN