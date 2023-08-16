// TODO: FOR LOOP

let i = 0;
for (; i < 10; i++) {
  console.log({ type: "for loop", value: i });
}

// TODO: WHILE LOOP

let j = 0;
while (j < 10) {
  console.log({ type: "while loop", value: j });
  j++;
}

// TODO: DO WHILE LOOP

let k = 0;

do {
  console.log({ type: "do while loop", value: k });
  k++;
} while (k < 10);

// TODO: FOR IN LOOP

const person = {
  name: "John",
  age: 30,
  weight: 88.6,
};

for (let property in person) {
  console.log({
    type: "for in loop",
    value: `${property} --> ${person[property]}`,
  });
}

// TODO: FOR OF LOOP

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log({ type: "for of loop", value: color });
}

// TODO: FOR EACH LOOP

let names = ["John", "Jane", "Mary"];

names.forEach((name) => {
  console.log({ type: "for each loop", value: name });
});
