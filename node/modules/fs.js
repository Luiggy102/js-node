// File system
const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        // si no se pone en string saldra en buffer
        cb(data.toString());// cb es el callback
    })
}


function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No se ha podido' + err)
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

leer(`${__dirname}/archive.txt`, console.log)
//escribir(__dirname + '/archive1.txt', 'Soy un archivo nuevo', console.log)
//borrar(__dirname + '/archive1.txt', console.log) // ya fue borrado
