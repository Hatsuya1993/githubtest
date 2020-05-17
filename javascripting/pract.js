const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 },
];

const alphabeticalOrder = ["a", "a", "a", "a", "x", "t"];

const age = persons.filter((ages) => ages.age >= 18);

const plus = persons.reduce((total, sum) => (total += sum.age), 0);

const evn = persons.filter((even) => even.age % 2 == 0);

const sqr = persons.map((sqrr) => sqrr.age * sqrr.age);

const multi = persons.reduce((mult, ag) => (mult *= ag.age), 1);

const alpha = alphabeticalOrder.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));

console.log(alpha);
