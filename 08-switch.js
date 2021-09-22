/* Switch
Estructura de control de flujo, nos ayuda a tomar decisiones mediante la evaluacion de condicion (Tipo if) */

/* const edad = parseInt(prompt("ingresa tu edad"));
let mensaje = "";

/* Ejemlo 1 */

/* switch (edad) {
    case 18:
        mensaje = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera del rango de edad";
        break;
}

document.write(`<p>${mensaje}</p>`) */

/* Ejemplo 2 */

const nombre = prompt("Ingresa tu nombre");
let mensaje = '';

switch (nombre.toLowerCase) {
    case 'Carlos':
        mensaje = 'Eres administrador';
        break;
    case 'Juan':
        mensaje = 'Eres Usuario';
        default:
            mensaje = 'No tienes permisos para usar el sistema';
            break;
}

document.write(`<p>${mensaje}</p>`)