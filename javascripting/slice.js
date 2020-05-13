function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);
  if (arr.length == 0) {
    return 0;
  } else {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] >= num) {
        return k;
      }
    }
    return arr.length;
  }
}

console.log(getIndexToIns([], 1));
