const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mass) {
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
};
