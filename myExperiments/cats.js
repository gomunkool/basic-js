function countCats(mass) {
  let ears = [];
  for (let i = 0; i < mass.length; i++) {
    //console.log(mass[i]);

    for (let y = 0; y < mass[i].length; y++) {
      //console.log(mass[i][y]);
      if (mass[i][y] === "^^") {
        ears.push(mass[i][y]);
      }
    }
  }
  return ears.length;
}

console.log(
  countCats([
    ["##", "dd", "00"],
    ["^ ^", "..", "ss"],
    ["AA", "dd", "Oo"],
  ])
);

console.log(
  countCats([
    ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
    [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
    [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
    [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
    [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
    [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
    [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
    [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
  ])
);
