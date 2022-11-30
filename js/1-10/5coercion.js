// ================= coercion ============ //
// transformar tipo de datos en otros

console.log('----- implicita');

var cImplicita = 4 + '8' // string
var cImplicita2 = 4 * '8' // numero

console.log(typeof(cImplicita));
console.log(typeof(cImplicita2));

console.log('------- explicita');

// ttransfoermar a string

var cExplicita = String(cImplicita2);

console.log(typeof(cExplicita)); // transformado a strin

var cExplicita2 = Number(cImplicita);

console.log(typeof(cExplicita2)); // transformado a numero
