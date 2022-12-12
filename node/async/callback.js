//  ================== Callbacks ================= //
// funciones como parametros

//function IamAsync(miCallback) {

    //setTimeout(() => {
        //console.log(' === funcion asincrona === ');
        //console.log(' funciones como parametros');
        //miCallback();
    //}, 1000);

//}

//console.log('\n iniciando proceso...');

// se le pasa una funcion para cuando acabe el proceso
//IamAsync(() => console.log(' \n terminado proceso...'));

// ============ Ejemplo 2 =========== //
console.clear();

function saludar(nombre, callback) {

    setTimeout(() => {
        console.log('hola ' + nombre);
        callback();
    }, 1000);

};

function despedir(nombre, otroCallback) {

    setTimeout(() => {
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1500);

};

console.log(' \n iniciando proceso 2 ...');
