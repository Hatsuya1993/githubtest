function reverseString(str) {
  var a = str.split("");
  a = a.reverse();
  a = a.join("");
  return a;
}

console.log(reverseString("hello"));
