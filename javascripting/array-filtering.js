const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numb = [];
let evenNumbers = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numb.push(numbers[i]);
    }
  }
  return numb;
};

console.log(evenNumbers(numbers));
