// Nueva forma de asincornia: Promesas
// Beben de los callbacks
// Pueden tener estados: resueltas, pendientes, fallar

//function hello(name, myCallback) {
    //setTimeout(() => {
        //console.log('Hola ' + name);
        //myCallback(name)
    //}, 1000);
//}

function hello(name) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('Hola' + name);
            resolve(name)
        }, 1000);
    });
}

function speak(speakCallback) {
    setTimeout(() => {
        console.log('bla, bla, bla');
        speakCallback();
    }, 1000);
}

function bye(name, anotherCallback) {
    setTimeout(() => {
        console.log('Adios ' + name);
        anotherCallback(); 
    }, 1000);
}

// -- Ejecución 

console.log('Starting Process...');
