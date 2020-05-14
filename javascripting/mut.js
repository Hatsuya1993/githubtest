function chunkArrayInGroups(arr, size) {
  let a = [];
  let b = [];
  let c;

  do {
    for (let i = 0; i < size; i++) {
      c = arr.shift();
      if (c == undefined) {
        continue;
      }
      b.push(c);
    }
    a.push(b);
    b = [];
  } while (arr.length != 0);
  return a;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
