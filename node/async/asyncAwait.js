async function hello(name) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log(`Hola ${name}`);
            resolve(name)
        }, 1000);
    });
}

async function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla, bla, bla');
            resolve(name);
            reject('Hay un error en la función speak');
        }, 1000);
    })
}

async function bye(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Adios ${name}`);
            resolve();
        }, 1000);
    })
}

// await solo es valido dentro de una función asincorna
console.log('Async Await');

// funcion principal
async function main() {
    console.log('Empezamos el proceso...');
    let name = await hello('Charles');
    speak()
    speak()
    await speak()
    await bye(name)
    console.log('Termina el proceso...');
}

main();
