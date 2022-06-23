let numero = parseFloat(prompt("Ingrese su valor en pesos argentinos para convertirlo en reales"));

while (isNaN(numero) || numero < 0){
    parseFloat(prompt("Ingrese su valor en pesos argentinos para convertirlo en reales"));
}
function conversorAReales(num){
    let libra = 0.04171;    
    let cuenta = libra * num;
    return cuenta
}
let resultado = conversorAReales(numero);

alert("Sus pesos argentinos valen " + resultado + " reales.");