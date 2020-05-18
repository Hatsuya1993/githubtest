function songDecoder(song) {
  let a = ["W", "U", "B"];
  let d = ["WUB"];
  let b = song.split("");
  let c = 0;
  let e = 3;
  //   let z = b.splice(c, e);
  //   return b;

  //   while (b.length > 0) {
  //     let f = b.slice(c, e);
  //     f = f.join("");

  //     if (f == d) {
  //       f = b.splice(c, e);
  //       c = 0;
  //     } else {
  //       c += 1;
  //     }
  //   }
  //   return b;
  //   let g = song.replace((/W\s*U\s*B\s/g, " "));
  //   return g;
  const g = song.filter((comp) => comp != "WUB");
  return g;
}
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
