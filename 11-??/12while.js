let num = 1;

while (num <= 10) {
    console.log(num);
    num++
}

const estudiantes = ["Maria", "Sergio", "Rosa", "Daniela"];

while (estudiantes.length > 0) {
    // se quita con shift para que el array llege a 0
    let estudiante = estudiantes.shift();
    console.log(`Hola, ${estudiante}`);
}
console.log(estudiantes);
