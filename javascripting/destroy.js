function destroyer(...arr) {
  let a = arr[0];
  arr.shift();
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (a[i] == arr[j]) {
        delete a[i];
      }
    }
  }
  let b = a.filter((ab) => ab != null);
  return b;
}
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
