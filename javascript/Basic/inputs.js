const readline = require("readline");

// * utilizando readline para crear un input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  const Name = await prompt("Como es tu Nombre? ");
  const Lastname = await prompt("Como es tu Apellido? ");
  console.log(`Hola ${Name} ${Lastname}`);
  rl.close();
}

module.exports = { prompt, main, rl };
