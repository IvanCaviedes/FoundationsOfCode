// Todo: Asignar un valor a una variable
var username = "sammy_shark";
if (username === "sammy_shark") {
  console.log({ state: "assigned", value: username });
}

// Todo: Mutando el valor de una variable
username = "sammy_shark_modified";
console.log({ state: "modified", value: username });

// Todo: Las variables de JavaScript se pueden declarar de 3 manera

//* 1. Variable declarada con var
//* 2. Variable declarada con let
//* 3. Variable declarada con const

// ? var tiene alcance de funcion, puede ser reasignada y puede ser redeclarada
// ? let tiene alcance de bloque, puede ser reasignada y no puede ser redeclarada
// ? const tiene alcance de bloque, no puede ser reasignada y no puede ser redeclarada

// Todo: alcance de las variables

// ? Las variables globales son aquellas declaradas fuera de un bloque.
// ? Las variables locales son aquellas declaradas dentro de un bloque.

//* ejemplo de variable global

// ? Inicializamos la variable global
var species = "human";

function transform() {
  // ? Inicializamos una variable local con ámbito de función
  let species = "werewolf";
  // ? Resultado de variable local
  console.log({ species, state: "function" });
}

// ? Resultado de variable global
console.log({ species, state: "global" });
// ? Invocamos la función
transform();
// ? Resultado no mutado de variable global
console.log({ species, state: "global" });

// TODO: Hoisting
// ? Hoisting es cuando las declaraciones de variables se elevan al principio del cóndigo.
console.log({ x }); // !ReferenceError: x is not defined
var x = 10;

// Todo: sobreescribiendo una variable usando var
var x = 1;
var x = 2;
console.log(x); // ? resultado 2

// Todo: sobreescribiendo una variable usando let
let y = 1;
let y = 2;
console.log(y); // !SyntaxError: Identifier 'y' has already been declared

// Todo : Constantes
// ? Las constantes no pueden ser reasignadas
const SPECIES = "human";
SPECIES = "werewolf";
console.log(SPECIES); // ! Uncaught TypeError: Assignment to constant variable.

// * las contantes no se pueden reasignar se deben iniciarlizar siempre al momento de declarar 
const TODO;
console.log(TODO); // !Uncaught SyntaxError: Missing initializer in const declaration