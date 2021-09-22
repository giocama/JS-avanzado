/*  Arreglos Estructura de datos */

const arreglo = [];
const arreglo2 = new Array();

let lenguajes = ["Javascript", "Java", "PHP", "Python", "C#", "C++", "Scala", "Rust", "Ruby", "Cobol",];

/* forEach */
document.write('<ul>');
lenguajes.forEach(function (lenguaje, index) {
    document.write(`<li>${index} - ${lenguaje}</li>`);
});
document.write('</ul>')

/* Map, Crea un nuevo arreglo con los resultados */
let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero) {
    return numeros * 2;
});

console.log(numeros);
console.log(numeros2);

/* Includes: Determina si un arreglo contiene un valor  */
console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('Go'));

/* Filter: Crea un nuevo arreglo con todos los elemento que cumplan con la condicion  */
let filtrados = numeros.filter(function(numero) {
    if(numero > 10) {
        return numero
    }
});

console.log(filtrados);