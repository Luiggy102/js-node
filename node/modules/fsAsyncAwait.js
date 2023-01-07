const archivosDelSitema = require('fs');

function leerArchivo(ruta, cb) {
    archivosDelSitema.readFile(ruta, "utf-8", (error, datos) => {
        if(error) console.log(error.message)
        else console.log('--- Lectura completada con exito\n');
        cb(datos.toString())
    })
}

leerArchivo(`${__dirname}/archive.txt`, console.log)
//leerArchivo('./archive.txt', console.log)

