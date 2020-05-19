function findMissingLetter(array) {
  let a;
  let narray = array.join("");
  let letter = "abcdefghijklmnopqrstuvwxyz";
  if (narray == narray.toUpperCase()) {
    a = 1;
    letter = letter.toUpperCase();
  } else {
    a = 0;
  }
  letter = letter.split("");

  let b = [];
  let c = [];

  for (let i = 0; i < letter.length; i++) {
    if (letter[i] == array[0]) {
      a = letter.splice(i, array.length + 1);
      break;
    }
  }
  for (let j = 0; j < a.length; j++) {
    b[a[j]] = true;
  }
  for (let k = 0; k < array.length; k++) {
    if (b[array[k]] == true) {
      delete b[array[k]];
    } else {
      b[array[k]] = true;
    }
  }
  for (var l in b) {
    c.push(l);
  }

  return c.join();
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
