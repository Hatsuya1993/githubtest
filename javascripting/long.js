function findLongestWordLength(str) {
  str = str.split(" ");
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > a) {
      a = str[i].length;
    }
  }
  return a;
}

console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);
