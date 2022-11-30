//En este desafío tu función solution recibirá 2 parámetros:

    //estudiantes: un array de strings con varios nombres de estudiantes.
    //deathCount: un número entero.
    //nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

//Tu función debe retornar un array de elementos con las siguientes indicaciones:

    //Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

    //Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes pero eliminando de atrás para adelante a la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.



let estudiantes = ['estudiante1', 'estudiante2', 'estudiante3'];
let numDeMuerte = 0;
let estudianteNuevo = 'estudiante nuevo';

function saveStudents(students, deathCount, newStudent) {
    while (deathCount > 0) {
        students.pop()
        deathCount--
    }
    students.push(newStudent); return students
}

numDeMuerte = 2
console.log(saveStudents(estudiantes, numDeMuerte, estudianteNuevo));


//let arrayPrueba = ["Juan", "Juanita", "Daniela"];
//numDeMuerte = 3

//while (numDeMuerte > 0) {
    //arrayPrueba.pop()
    //numDeMuerte--
    //console.log(arrayPrueba);
//}
