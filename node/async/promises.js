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
            console.log(`Hola ${name}`);
            resolve(name)
        }, 100);
    });
}

function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla, bla, bla');
            resolve(name);
            reject('Hay un error en la función speak');
        }, 100);
    })
}

function bye(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Adios ${name}`);
            console.log('End Process...');
            resolve();
        }, 100);
    })
}

// -- Ejecución 

console.log('Starting Process...');

hello('Charles')
    .then(speak)
    .then(bye)
    .catch(error => { // cualquira que tenga en el reject va a salir
        console.error(error);
    })
