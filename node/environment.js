// ================ Variables de entorno ============== //

// se las colocan en mayuscula
let nombre = process.env.NOMBRE || 'sin nombre'; // || 'valor por defecro'

// Para invocar
// NOMBRE=JOE node environment.js

console.log('Hola ' + nombre);
