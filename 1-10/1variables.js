// ============ variables =============
console.log('\n== variables ==');
//declarar
var edad;
// inicialiazar
edad = 20;

console.log(edad);
console.log(typeof(edad));

var elements = ['computer', 'celular']

elements.forEach(element => {
    console.log(element); 
});

var persona = {
    nombre: 'Luiggy',
    edad: 22
}

console.log('El objeto persona consta de: ');
console.log(persona);

persona.nombre = 'Juan dios plan'

console.log(persona);
console.log('asdfasdfasdf');

function sumaDosNum(a,b) { return a + b; }

console.log(sumaDosNum(9, 2));
