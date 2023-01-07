// Globales
// son modulos que ya vienen en node
// ej: console.log(); console.error(); settimeout

// ver los globales
//console.log(global);

// no usar variables globales en la medida de lo posible
// en lugar usar
global.miVariable = 'Mi valor'
console.log(global.miVariable);

console.log(setInterval);

let i = 1;

// Se ejecuta cada cierto tiempo
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) clearInterval(intervalo) // si es 3 que se acabe a si misma   
    i++;
}, 1000);;

setImmediate(() => {
    console.log('inmediato');
})

//console.log(process);
console.log(__dirname);
console.log(__filename);


