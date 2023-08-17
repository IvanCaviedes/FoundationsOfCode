// todo: definicion de array basica
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// todo: definition of array por constructor

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// ? ver longitud del array
console.log(arr.length);

// ? añadir un nuevo valor al array

arr.push(6);
console.log(arr);

// ? eliminar el ultimo valor del array

arr.pop();
console.log(arr);

// ? añadir al principio del array

arr.unshift(0);
console.log(arr);

// ? eliminar el primer valor del array

arr.shift();
console.log(arr);

// ? encontrar el indice de un valor

console.log(arr.indexOf(2));

// ? acceso a los elementos de un array

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// todo: funciones mas importantes de los Array

// ? concatenar dos arrays

let arr3 = [6, 7, 8, 9, 10];
let arr4 = arr.concat(arr3);
console.log(arr4);

// ? fill

let arr5 = new Array(10).fill(0);
console.log(arr5);

// ? includes
console.log(arr.includes(2));
// ? reverse

console.log(arr.reverse());
// ? sort

console.log(arr.sort());
// ? slice

console.log(arr.slice(0, 3));
// ? splice

arr.splice(0, 1);
// ? map

// * multimplicamos todos los valores del array * 2 y devolvermos un nuevo array con el resultado
let arr6 = arr.map(function (item) {
  return item * 2;
});

console.log(arr6);
// ? filter

// * filtramos todos los valores del array que sean menores a 5 y devolveremos un nuevo array con el resultado

let arr7 = arr.filter(function (item) {
  return item < 5;
});
console.log(arr7);

// ? reduce

// * acumulamos todos los valores del array y devolvemos un nuevo array con el resultado

let arr8 = arr.reduce(function (total, item) {
  return total + item;
}, 0);
console.log(arr8);
// ? some

// * verificamos si alguno de los valores del array es mayor a 5 y devolvemos un nuevo array con el resultado

let arr9 = arr.some(function (item) {
  return item > 5;
});
console.log(arr9);

// ? every

// * verificamos si todos los valores del array son mayores a 5 y devolvemos un nuevo array con el resultado

let arr10 = arr.every(function (item) {
  return item > 5;
});
console.log(arr10);

// ? find

// * encontramos el primer valor del array que sea mayor a 2 y devolvemos un nuevo array con el resultado
let arr11 = arr.find(function (item) {
  return item > 2;
});
console.log(arr11);

// todo: definir un objeto
let persona = {};
console.log(persona);

// todo: creando un objeto con valores

let personaCondatos = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28,
};

console.log(personaCondatos);

// todo: definir un objeto por constructor

let persona2 = new Object();

// ? agregando valores a un objeto

persona2.nombre = "Juan";
persona2.apellido = "Perez";
persona2.edad = 28;

// ? tener acceso a las propiedades de un objeto

console.log(persona2.nombre);
console.log(persona2["nombre"]);

// ? crear nuevos campos o rescribir los anteriores

// ? Sobrescribir el valor de una propiedad
persona2.nombre = "Carlos";
// ? Agregar una nueva propiedad
persona2.pais = "Mexico";
