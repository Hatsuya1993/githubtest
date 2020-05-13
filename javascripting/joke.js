function bouncer(arr) {
  function truthy(value) {
    return value;
  }

  var filtered = arr.filter(truthy);
  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));
