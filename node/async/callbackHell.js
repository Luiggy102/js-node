// ======== callback hell ====== //
// poner funciones callback tras funciones callback,
// se vuelve código poco lejible

function saludar(nombre, callback) {
    setTimeout(() => {
        console.log('hola ' + nombre);
        callback(nombre); // para pasar el parametro nombre a otra funcion
    }, 1000);
};

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('bla, bla, bla, bla...');
        callbackHablar();
    },500);
}

function despedir(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1000);
};

console.log('\nstart process... ');

// =============== callback hell =============== //

//saludar('Joe', function (nombre) { 
    //hablar(function () {
        //hablar(function () {
            //hablar(function() {
                //despedir(nombre , function () { 
                    //console.log('end process...');
                //});
            //});
        //});
    //});
//});

// ========== recursividad =============
// llamar a la misma funciones pero con info distinta

function conversacion(nombre, vecesDeConversacion, callback) {
    if (vecesDeConversacion > 0) {
        hablar(function() {
            conversacion(nombre, --vecesDeConversacion, callback);
        })
    } else {
        despedir(nombre, callback);
    }
};

saludar('Joe', function(nombre) {
    conversacion(nombre, 4, function() {
        console.log('end process...')
    })
})
