// TODO: Condicional If

let edad = 18;
if (edad >= 18) {
  console.log("Es mayor de edad");
}

// TODO: Condicional Else

let edad2 = 15;
if (edad2 >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// TODO: CONDICIONAL SWITCH CASE

let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Es lunes");
    break;
  case "martes":
    console.log("Es martes");
    break;
  case "miercoles":
    console.log("Es miercoles");
    break;
  case "jueves":
    console.log("Es jueves");
    break;
  case "viernes":
    console.log("Es viernes");
    break;
  case "sabado":
    console.log("Es sabado");
    break;
  case "domingo":
    console.log("Es domingo");
    break;
  default:
    console.log("No es un dia de la semana");
}

// TODO: TERNARY CONDICIONAL

let numero = 1;
let numeroTexto = numero === 1 ? "NÚMERO UNO" : "NO ES UN NÚMERO UNO";
console.log(numeroTexto);
