function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len2 = arr[i]; j < len2.length; j++) {
      if (len2[j] == elem) {
        delete arr[i];
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] != "") {
      newArr.push(arr[i]);
    }
  }

  return newArr;
  // Only change code above this line
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);
