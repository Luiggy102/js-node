// ----------- funciones -----------

// --------- declarativa -------------

saluda('Carlos')

function saluda(nombre) {
    console.log(`Hola ${nombre}`);
}

// ------------- expresion -------------

var funcVarr = function funcVarr(a,b) {
    return a + b
};

console.log(funcVarr(10,10));
console.log(funcVarr(44,44));
