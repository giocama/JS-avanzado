/* var numero = parseInt(prompt('Escriba un numero'));

if (numero%2==0) {
    alert("El número "+numero+" es par");

} else {
    alert("El número "+numero+" es impar");
} */

var num1 = parseInt(prompt("Ingrese un numero: "));
var num2 = parseInt(prompt("Ingrese un numero: "));

let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
let output = Array.from({length: max - min + 1}, (v, i) => i + min);
if (num1%2==0);
prompt(output.join(','));