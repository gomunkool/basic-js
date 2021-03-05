const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(name) {
  if (name && name.length) {
    let words = [];

    for (let i = 0; i < name.length; i++) {
      if (typeof name[i] === "string") {
        let nameToUp = name[i].toUpperCase();

        let massName = nameToUp.split("");

        for (let y = 0; y < massName.length; y++) {
          if (massName[y] != " ") {
            words.push(massName[y]);
            break;
          }
        }
      }
    }

    let sortWords = words.sort();
    let sortToString = sortWords.join("");

    return sortToString;
  }
};
