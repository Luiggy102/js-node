let articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]

// find 
// consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función 
// Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

// Si ningún elemento cumpla con la condición, retornará undefined

console.log('\n Resultado de si hay articulo "Laptop" ');
let busquedaArrayLaptop = articulos.find(articulo => articulo.nombre === "Laptop");
console.log(busquedaArrayLaptop);

console.log('\n Resultado de si hay articulo con valor de 500');
let busquedaArrayQuinientos = articulos.find(articulo => articulo.costo === 500);
console.log(busquedaArrayQuinientos);

// for earch
// Aplica una función para cada uno de los elementos iterados.

console.log('\n = Todos los elementos con 30% de descuento');
let articulosConDescuento = articulos.forEach(function(articulo) {
  // 30% de descuento
  let descuento = 0.3;
  let valorOriginal = articulo.costo; 
  let valorADescontar = valorOriginal * descuento;
  let valorConDescuento = valorOriginal - valorADescontar;
  console.log('Nombre: ' + articulo.nombre + ', \n === Precio original: $' + valorOriginal + ' Descuento: $' + valorConDescuento);
});

// some
// retorna un valor booleano si existe al menos un elemento que cumpla la condición establecida en la función (callback).

let existeArticuloMenorACien = articulos.some(articulo => articulo.costo < 100);
console.log('\n hay articulo menor a 100? R: ' + existeArticuloMenorACien);

let existeArticuloMenorAMil = articulos.some(articulo => articulo.costo < 1000);
console.log('\n hay articulo menor a 1000? R: ' + existeArticuloMenorAMil);
