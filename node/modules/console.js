// lo miso q el console.log();
console.info('aoeuaoe'.length);

// advertencia
console.warn('advertencia');
// error
console.error('error');

//tabla
let tabla = [
    {
        nombre: 'Jhon',
        apellido: 'Hugmann',
        edad: 20
    },
    {
        nombre: 'Charles',
        apellido: 'Xavier',
        edad: 30
    }
];

console.log(tabla);
// mucho mejor
console.table(tabla);

// mejor identacion
console.group("Conversación");
console.log('Hola');
console.log('bla bla bla');
console.log('chao');
console.groupEnd();

// ejemplo real
console.log('\t== Ejemplo de cgroup == ');

function funcion1() {
    console.group("Funcion 1");
    console.log('Esto el de la funcion 1');
    console.log('tambien funcion1');
    console.log('tambien funcion1');
    console.log('tambien funcion1');
    funcion2();
    console.log('Volvemos funcion1');
    console.groupEnd();
}

function funcion2() {
    console.group("Funcion 2");
    console.log('Ahora esta el la funcion2');
    console.groupEnd();
}

funcion1();

console.log('\n');
// contadores, como para sabor las veces que pasar dentro de un Bucle
// o cuantas veces pasar por una funcion hasta llegar el final
console.count('Veces dentro del Bucle')
console.count('Veces dentro del Bucle')
console.count('Veces dentro del Bucle')
console.count('Veces dentro del Bucle')
console.count('Veces dentro del Bucle')
console.countReset('Veces dentro del Bucle')
console.count('Veces dentro del Bucle')
console.count('Veces dentro del Bucle')

