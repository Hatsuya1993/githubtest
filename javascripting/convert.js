function diffArray(arr1, arr2) {
  let a = [];
  let b = [];

  for (let i = 0; i < arr1.length; i++) {
    a[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (a[arr2[j]] == true) {
      delete a[arr2[j]];
    } else {
      a[arr2[j]] = true;
    }
  }
  for (let i in a) {
    b.push(i);
  }
  return b;
}
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
