let objeto = {
    llave: 'valor',
};

console.log(objeto);
console.log(typeof(objeto));

let coche = {
    // propiedades
    marca: 'Volkswagen',
    modelo: 'a399',
    annio: '2022',
    // metodos
    detallesDelAuto: function() {
        console.log(`Auto marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.annio}`);
    }
};

console.log(coche.marca);
console.log(coche.modelo);
// se llama con ()
console.log(coche.detallesDelAuto());
