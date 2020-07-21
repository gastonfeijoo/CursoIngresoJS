/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let nTemperatura;
    let nCentigrados;
    
    nTemperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    nCentigrados = (nTemperatura - 32) * 5  / 9;

    alert("La temperatura en Centigrados es " + nCentigrados.toFixed(2));
}

function CentigradosFahrenheit () 
{
    let nTemperatura;
    let nFahrenheit;
    
    nTemperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    nFahrenheit =  (nTemperatura / 5) * 9 + 32;

    alert("La temperatura en Fahrenheit es " + nFahrenheit.toFixed(2));
}
