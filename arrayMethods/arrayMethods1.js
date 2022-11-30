let articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]

articulos.forEach(articulo => console.log('=== Nombre del articulo: ' + articulo.nombre + ' $' + articulo.costo));

// filter
// crear un nuevo array a partir de los elementos originales filtrados mediante una función

let articulosMenoreDeMil = articulos.filter(articulo => articulo.costo < 1000)

console.log('\n === Articulos menores de 1000');
console.log(articulosMenoreDeMil);

let articulosMayoresDeMil = articulos.filter(articulo => articulo.costo > 1000)

console.log('\n === Articulos mayores de 1000');
console.log(articulosMayoresDeMil);

// map
// crear un nuevo array a partir de los elementos originales para hacerlos otra cosa(objeto, nums, etc)
// filtrados mediante una función

let costosDeArticulos = articulos.map(articulo => articulo.costo);
console.log('\n ==== costo de articulos');
console.log(costosDeArticulos.join());

// transformar costosDeArticulos en objeto

// los {} representar bloque de código
// se pone en () para representar objeto
let costosDeArticulosObj = costosDeArticulos.map(costo => ({valor: costo}))
console.log('\n ==== costo de articulos en objetos');
console.log(costosDeArticulosObj);
