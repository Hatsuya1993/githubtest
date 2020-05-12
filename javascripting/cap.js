function titleCase(str) {
  let str1 = str.split(""); // split string to letters
  for (let i = 0; i < str1.length; i++) {
    str1[i] = str1[i].toLowerCase();
  }
  let str2 = str.split(" ");

  for (let j = 0; j < str2.length; j++) {
    str2[j] = str2[j].toLowerCase().split("");
    str2[j][0] = str2[j][0].toUpperCase();
    str2[j] = str2[j].join("");
  }
  return str2.join(" ");
}
console.log(titleCase("sHoRt AnD sToUt"));
