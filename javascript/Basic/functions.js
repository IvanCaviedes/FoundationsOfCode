// Todo: funcion por declaración

function suma(a, b) {
  return a + b;
}
suma(2, 3);

// Todo: funcion Por expresión

const resta = function (a, b) {
  return a - b;
};
resta(2, 3);

// Todo: funcion por constructor de objeto

// eslint-disable-next-line no-new-func
const greetings = new Function("return 'Hola';");
greetings(); // 'Hola'

// Todo: funcion que devuelve un valor

function suma2(a, b) {
  return a + b;
}
const resultado = suma2(2, 3);
console.log(resultado);

// Todo: funcion que no devuelve un valor

function suma3(a, b) {
  console.log(a + b);
}
suma3(2, 5);

// Todo: funcion de flecha

const suma5 = (a, b) => a + b;
const resultado2 = suma5(2, 3);
console.log(resultado2);
