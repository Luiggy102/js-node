var estudiantes = ['pepito', 'juanito', 'chanclito']

function saludarEstudiantes(estudiante) {
    estudiante.forEach(estudiante => {
        console.log('Hola ' + estudiante);
    });
}

saludarEstudiantes(estudiantes);

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    console.log('hola en loop ' + estudiante);
}

console.log('\nejemplos de loop');

for (let i = 0; i <= 10; i++) {
    console.log('tabla del 8: 8 x ' + i, '= ' + i*8);
}

console.log('me gusta js');

console.log(`Hola ${nombre}`);
var nombre;
