// =================== Errores sincronos ================== //
// Funcion que se rompe
let seRompe = () => 3 + z; // no se define z

function otraFuncion() {
    return seRompe()
}

// =================== Errores Asincronos ================== //
function funcErrorAsincrono(cb) {
    setTimeout(() => {
        // se pone el posible error dentro de in try catc
        try {
            return 3 + z
        } catch (e) {
            console.error('Hubo error en func ansincona');
            cb(e) // mandar el error en el callback para avisar
        }
    }, 1000);
}


console.log('Iniciando proceso...');
// si sabemos que puede romper
// se pone dentro de un try
try {
    //otraFuncion();
    funcErrorAsincrono((error) => console.log(error.message))
} catch (e) {
    console.error('\t La funcion se rompió');
    // el log del error esta en e
    console.error(e.message);
    console.log('se capturó el error');
}

//console.log('\n== Fin del archivo == ');


