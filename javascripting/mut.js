function splitify(str) {
  // Only change code below this line
  let a = str.split(/\W|_/g);
  let b = a.join(" ");
  return b;
  // Only change code above this line
}
console.log(splitify("May-the-force-be-with-you"));
