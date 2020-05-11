function truncateString(str, num) {
  let b = [];
  let p = str.split("");
  if (num < p.length) {
    for (let j = 0; j < num; j++) {
      b.push(p[j]);
    }
    return b.join("") + "...";
  } else {
  }
  let a = [];
  let m = str.split("");
  for (let i = 0; i < num; i++) {
    a.push(m[i]);
  }
  return a.join("");
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
