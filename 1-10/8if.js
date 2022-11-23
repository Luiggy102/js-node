var condicion = false
if (condicion) {
    console.log('verdadero');
} else {
    console.log('falso');
}

// mayor de edad, vota, menor, no vota, 18, primera vez

var edadVotante = 17;

if (edadVotante === 18) {
    console.log('primera vez que votar');
} else if (edadVotante >= 18) {
    console.log('es apto para votar');
} else {
    console.log('no esta apto para votar');
}

// operador ternario

let num = 9;

let result = num === 1 ? "soy uno" : "no soy uno";

console.log(result);
