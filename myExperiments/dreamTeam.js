function createDreamTeam(name) {
  let words = [];

  for (let i = 0; i < name.length; i++) {
    if (typeof name[i] === "string") {
      let nameToUp = name[i].toUpperCase();
      // console.log(nameToUp);
      let massName = nameToUp.split("");
      //console.log(massName);
      for (let y = 0; y < massName.length; y++) {
        //console.log(massName[y]);
        if (massName[y] != " ") {
          words.push(massName[y]);
          break;
        }
      }
    }
  }

  let sortWords = words.sort();

  return sortWords;
}

console.log(
  createDreamTeam(["   Adam", "Gary", "       Bobby", "Philip", " Denise"])
);

console.log(
  createDreamTeam([
    "adam",
    false,
    "Gary",
    null,
    undefined,
    true,
    2,
    "bobby",
    "Philip",
    1,
    "Denise",
  ])
);

console.log(
  createDreamTeam([
    "William Alston ",
    " Paul Benacerraf",
    "  Ross Cameron",
    "       Gilles Deleuze",
    "  Arda Denkel ",
    "  Michael Devitt",
    "  Kit Fine",
    " Nelson Goodman",
    "David Kolb",
    "   Saul Kripke",
    "  Trenton Merricks",
    "  Jay Rosenberg",
  ])
);
//'ADGJKMNPRSTW');
