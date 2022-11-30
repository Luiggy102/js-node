//lista de datos para guardar valores
let fruits = ['apple', 'pineapple', 'coconut'];
console.log(fruits);

// ver cantidad
console.log('cantidad ' +fruits.length);

// acceder
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// agregar elementos al array original 
let moreFrutis = fruits.push('melon') 
console.log('push');
console.log(fruits);

// eliminar el ultimo elemento
let deletedElemet = fruits.pop(); // regresa el valor eleminiado
console.log(fruits);

// agregar al inicio
let newLength = fruits.unshift('Green Apple');
console.log(fruits);

// eleminar al inicio
let deleteFirst = fruits.shift();
console.log(fruits);

// ver el indice/pocision del elemento
let indexOfFruit = fruits.indexOf('coconut');
console.log(indexOfFruit);
