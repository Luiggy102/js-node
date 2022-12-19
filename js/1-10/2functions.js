// ----------- funciones -----------

// --------- declarativa -------------

saluda('Carlos');

function saluda(nombre) {
    console.log(`Hola ${nombre}`);
}

// ------------- expresion -------------

// suma
var funcVarr = function funcVarr(a,b) {
    return a + b
};

// multiplicación 
let funcVarr2 = (a,b) => a * b

console.log(funcVarr(10,10));
console.log(funcVarr(44,44));
console.log(funcVarr2(5,5));
