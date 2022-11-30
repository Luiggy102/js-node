// ----------- scope --------------

var name = 'Sebastian' // Global

function agregaApellido(nombre) {
    var apellido = ' Bach' // local
    return nombre + apellido
}

var nombreCompleto = agregaApellido(name)

console.log(name); // accesible
// console.log(apellido); // no accesible
console.log(nombreCompleto);
