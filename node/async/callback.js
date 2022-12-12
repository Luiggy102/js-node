//  ================== Callbacks ================= //
// funciones como parametros

// ============ Ejemplo 2 =========== //
console.clear();

function saludar(nombre, callback) {
    setTimeout(() => {
        console.log('hola ' + nombre);
        callback(nombre); // para pasar el parametro nombre a otra funcion
    }, 1000);
};

function despedir(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1000);
};

console.log('\nstart process... ');

// recibe le parametro `nombre` que lo pasa a la funcion 
saludar('Joe', function (nombre) { // `callback` si recibe parametro
    // lo pasa a la funcion de abajo
    despedir(nombre , function () { // `otroCallback` no reciber parametro
        console.log('end process');
    })
});

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

