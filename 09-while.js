/* Ciclo While: Nos permite repetir bloques de codigo mientras una condicion sea verdadera */

//Ejemplo 1
/* let num1 = parseInt(prompt('Ingresa un numero'));
//NaN Not a Number
while(isNaN(num1)) {
    num1 = parseInt(prompt('Ingresa un numero'));
} */
//////////////////////////////////////////////////////////////

//Ejemplo 2
/* let num1 = parseInt(prompt("Ingresa un numero"));
const num_secreto = 23
let intentos = 1;

while(num1 !== num_secreto) {
    console.log("No adivinaste el numero secreto, intentalo de nuevo");
    console.log(`Intento${intentos}`)
    intentos++;
    num1 = parseInt(prompt("Ingresa un numero"));
}

console.log('Felicidades, encontraste el numero secreto'); */
//////////////////////////////////////////////////////////////

//DoWhile
/* let num1 = parseInt(prompt("Ingresa un numero"));

do {
    document.write(`<p>El numero introducido es: ${num1}</p>`);
    num1 = parseInt(prompt("ingresa un numero"));
}
while(num1 > 5); */
//////////////////////////////////////////////////////////////
/* let num = parseInt(prompt("Ingresa un numero"));
let suma = 0;
let contador = 0;

while(num > 0) {
    suma = suma + num
    num = parseInt(prompt("Ingresa un numero"));
    contador++
}
console.log(suma);
console.log(suma/contador);
console.log(`La suma fue: ${suma} se dividio entre ${contador}`); */
//////////////////////////////////////////////////////////////

/* function suma_media(num, suma=0, contador=0, elementos=[]) {
    while(num >= 0) {
        suma += num
        contador += 1
        elementos.push(num)
        num = parseInt(prompt("Introduce un numero"));
    }
    console.log(`Los numeros fueron: ${elementos}`);
    console.log(`Total de datos introducidos: ${elementos.length}`);
    console.log(`La suma es: ${suma}`);
    console.log(`La media es: ${suma/contador}`);
}

let user_number = parseInt(prompt("Ingresa un numero"));
suma_media(user_number); */
//////////////////////////////////////////////////////////////

/* var num = parseInt(prompt("Ingresa un numero"));
let suma = 0;
let contador = 0;

while(num > 0) {
    suma = suma + num
    num = parseInt(prompt("Ingresa un numero"));
    contador++
}

document.write(`<p>La suma es: ${suma}</p> <p>El promedio es: ${suma/contador}</p>`); */
//////////////////////////////////////////////////////////////

/* const numero = parseInt(prompt("Ingresa un numero"));

for(let i = 0; i <= numero; i++) {
    if (numero % i === 0) {
        document.write(i + "</br>");
    } 
} */
//////////////////////////////////////////////////////////////

var division = prompt("Escribe un número");
var numero;

for (numero=2; numero <= division/2; numero++) {
    if (division % numero === 0)
    {
        document.write(`${division}`);
        document.write("<br> Su divisor es: ", numero);
    }
}