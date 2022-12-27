// === Promesa == //
// o la promosa se cumple(resolve) o se falla (reject)

const p = new Promise((res, rej) => {
    let a = 1 + 1;
    if (a == 2) {
        res({valor: a, mensaje: 'Promesa Cumplida'}) // el parametro del then
    } else {
        rej({valor: a, mensaje: 'Promesa Fallada'}) // el parametro del catch
    }
});

p.then((respuesta) => {
        const { valor, mensaje } = respuesta;
        console.log(`\n${mensaje}!, El valor es: ${valor}`);
    })
  .catch((respuesta) => {
        const { valor, mensaje } = respuesta;
        console.log(`\n${mensaje}!, El valor es: ${valor}, debe ser 2`);
    })

// Ejemplo 

// se resuelve 2do
const video1 = new Promise((res) => {
    setTimeout(() => {
        res('Video 1 Grabado')
    }, 2000);
});

// se resuelve 1ro
const video2 = new Promise((res) => {
    setTimeout(() => {
        res('Video 2 Grabado')
    }, 1000);
});

// se resuelve 3ro
const video3 = new Promise((res) => {
    setTimeout(() => {
        res('Video 3 Grabado')
    }, 3000);
});

/*
 Promise all
 * Devuelve una promesa cuando todas las promesas del array terminan con exito
*/

Promise.all([ // espera que todo se cumpla, todos pasan al mismo tiempo
    video1,
    video2,
    video3
])
// cuando todo se cumple se ejecuta eso
    .then((mensajes) => {
        console.log('\n === Promise all == ');
        mensajes.forEach(mensaje => {
            console.log(mensaje);
        });
})

/*
 Promise race
 * hacer algo ni bien se cumple una promesa
*/

Promise.race([
    video1,
    video2,
    video3
])
    .then((mensaje) => {
        console.log('\n === Promise race == ');
        console.log(mensaje);
    })
