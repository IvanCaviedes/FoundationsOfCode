const { prompt, rl } = require("./inputs");

async function main() {
  // Todo: SUMA DE DOS NUMEROS

  const num1 = await prompt("Ingresa el primer numero para la suma: ");
  const num2 = await prompt("Ingresa el segundo numero para la suma: ");
  const suma = Number(num1) + Number(num2);
  console.log(`La suma de ${num1} + ${num2} = ${suma}`);

  // Todo: RESTA DE DOS NUMEROS

  const res1 = await prompt("Ingresa el primer numero para la resta: ");
  const res2 = await prompt("Ingresa el segundo numero para la resta: ");
  const resta = Number(res1) - Number(res2);
  console.log(`La suma de ${res1} - ${res2} = ${resta}`);

  // Todo: MULTIPLICACION DE DOS NUMEROS

  const mul1 = await prompt(
    "Ingresa el primer numero para la multiplicacion: "
  );
  const mul2 = await prompt(
    "Ingresa el segundo numero para la multiplicacion: "
  );
  const multiplicacion = Number(mul1) * Number(mul2);
  console.log(`La suma de ${mul1} * ${mul2} = ${multiplicacion}`);

  // Todo: DIVISION DE DOS NUMEROS

  const div1 = await prompt("Ingresa el primer numero para la division: ");
  const div2 = await prompt("Ingresa el segundo numero para la division: ");
  const division = Number(div1) / Number(div2);
  console.log(`La suma de ${div1} / ${div2} = ${division}`);

  // Todo: MODULO DE DOS NUMEROS

  const mod1 = await prompt("Ingresa el primer numero para el modulo: ");
  const mod2 = await prompt("Ingresa el segundo numero para el modulo: ");
  const modulo = Number(mod1) % Number(mod2);
  console.log(`El modulo de ${mod1} % ${mod2} = ${modulo}`);

  // Todo: RAIZ CUADRADA DE UN NUMERO

  const raiz1 = await prompt("Ingresa el numero para la raiz cuadrada: ");
  const raiz = Math.sqrt(raiz1);
  console.log(`La raiz cuadrada de ${raiz1} = ${raiz}`);

  // Todo: RAIZ CUBICA DE UN NUMERO

  const raiz3 = await prompt("Ingresa el numero para la raiz cubica: ");
  const raizc = Math.cbrt(raiz3);
  console.log(`La raiz cubica de ${raiz3} = ${raizc}`);

  // Todo: RAIZ CUADRATICA DE UN NUMERO

  const raiz2 = await prompt("Ingresa el numero para la raiz cuadrada: ");
  const raiz2c = Math.pow(raiz2, 2);
  console.log(`La raiz cuadrada de ${raiz2} = ${raiz2c}`);

  rl.close();
}

main();
