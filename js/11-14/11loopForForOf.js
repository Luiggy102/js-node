// for
const nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"];

function saludarEstudiantes(nombresEstudiantes) {
    for (let i = 0; i < nombresEstudiantes.length; i++) {
        console.log(`Hola ${nombresEstudiantes[i]}`);
    }
}

saludarEstudiantes(nombres)
console.log('\n');

// for of
for (const nombre of nombres) {
    console.log(`Hola, ${nombre}`);
}


