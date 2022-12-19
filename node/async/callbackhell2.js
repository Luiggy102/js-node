console.log('Starting Process...');

// Pasar datos entre funciones
function hello(name, myCallback) {
    setTimeout(() => {
        console.log('Hola ' + name);
        myCallback(name)
    }, 1000);
}

//hello('Charles', (name) => console.log('Pasado el dato de `name` con exito: ' + name));

function bye(name, anotherCallback) {
    setTimeout(() => {
        console.log('Adios ' + name);
        anotherCallback(); // callback para terminar el proceso
    }, 1000);
}

// Hola y adios
//hello('Charles', (name) => bye(name, () => console.log('Finishing process...'), 1000));

function speak(speakCallback) {
    console.log('bla, bla, bla');
    speakCallback();
}

// Repetir la funcion speak, dependiendo del numero de veces
function conversation(name, times, conversationCallback) {
    if (times > 0) {
        setTimeout(() => speak(() => conversation(name, --times, conversationCallback)), 1000);
    } else {
        conversationCallback(name);
    }
}

hello('Charles', (name) => conversation(name, 3, function(name) {
    bye(name, function () {
        console.log('Finishing Process...')
    });
}));
