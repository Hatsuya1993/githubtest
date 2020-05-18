function DNAStrand(dna) {
  let b = [];
  let a = dna.split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "A") {
      b.push("T");
      continue;
      return b;
    } else if (a[i] == "T") {
      b.push("A");
      continue;
    } else if (a[i] == "G") {
      b.push("C");
      continue;
    } else if (a[i] == "C") {
      b.push("G");
      continue;
    }
  }
  return b.join("");
}
console.log(DNAStrand("ATTGC"));
