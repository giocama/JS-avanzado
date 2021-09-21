/* var numero = parseInt(prompt('Escriba un numero'));

if (numero%2==0) {
    alert("El número "+numero+" es par");

} else {
    alert("El número "+numero+" es impar");
} */



/* var num1 = parseInt(prompt("Ingrese un numero: "));
var num2 = parseInt(prompt("Ingrese un numero: "));

let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
let output = Array.from({length: max - min + 1}, (v, i) => i + min);
if (num1%2==0);
prompt(output.join(',')); */



/* const numero1 = parseInt(prompt("Ingresa un numero: "));
const numero2 = parseInt(prompt("Ingresa un numero: "));

if(numero1 < numero2){
    for (let i = numero1; i <= numero2 ; i++) {
        if( i % 2 != 0)
        document.write(`El numero impar es: ${i} <br> `);
    }
}else if(numero1 > numero2){
    for (let i = numero2; i <= numero1 ; i++) {
        if( i % 2 != 0)
        document.write(`El numero impar es: ${i} <br> `);
    }
}else if (numero1 % 2 != 0){
    document.write(`Los numeros ingresados son iguales y son impar: ${numero1}`);
}else{
    document.write(`Los numeros ingresados no son impar`);
} */



/* const num1 = parseInt(prompt("Ingresa un numero: "));
const num2 = parseInt(prompt("Ingresa un numero: "));

if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
        if (i % 2 != 0) {
            document.write(`<strong>${i}, </strong>`);
        }
    }
} else {
    document.write(`<p>El segundo numero debe ser mayor que el primero</p>`);
} */



let a = parseInt(prompt('Ingresa un numero: '))
let b = parseInt(prompt('Ingresa un numero: '))

let numbers = []

function oddNumbers (a,b) {

    var maxNumber = Math.max (a, b)
    var minNumber = Math.min (a, b)

    for (let i = minNumber; i <= maxNumber; i++) {
        i % 2 == 0 ? null : numbers.push(i)
    }
}

oddNumbers (a,b)

document.write(`los numero impares son: ${numbers}`)