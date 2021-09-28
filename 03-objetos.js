/* const persona = {
    nombre: 'Julian',
    apellidos: 'Sanchez Perez',
    correo: julian@sanchez
}

document.write(persona.nombre); */
////////////////////////////////////////////////////

function Perro (nombre, edad, vivo) {
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
};
var perro1 = new Perro("rex", 5,true);
console.log(perro1);
var perro2 = new Perro("manchas", 3,false);
console.log(perro2);

var animal = [perro1, perro2];
console.log(animal);

