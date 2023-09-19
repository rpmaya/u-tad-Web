const miArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("1 - Bucle 'for', la forma más básica y tradicional de recorrer un array");

for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
}

console.log("2.1 - 'forEach' es más moderno y fácil de leer. Usa una función anónima (sin nombre)");

miArray.forEach(function (element) {
    console.log(element);
});

console.log("2.2 - Ó usando arrow function");

miArray.forEach(element => console.log(element));

console.log("3 - 'map' úsalo si necesitas crear un nuevo array basado en el existente")

const newArray = miArray.map(element => element * 2);

newArray.forEach(element => console.log(element));

console.log("4 - 'filter' si necesitas crear un nuevo array que contenga un subconjunto de elementos del original que cumplan cierta condición");
const filteredArray = miArray.filter(element => element >=5);

filteredArray.forEach(element => console.log(element));





