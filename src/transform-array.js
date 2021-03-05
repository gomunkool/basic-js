const CustomError = require("../extensions/custom-error");

module.exports = function transform(mass) {
  let massIzm = mass;

  for (let i = 0; i < massIzm.length; i++) {
    if (massIzm[i] === "--discard-next") {
      delete massIzm[i + 1];
      delete massIzm[i];
    } else if (massIzm[i] === "--discard-prev") {
      delete massIzm[i - 1];
      delete massIzm[i];
    } else if (massIzm[i] === "--double-next") {
      massIzm[i] = massIzm[i + 1];
    } else if (massIzm[i] === "--double-prev") {
      massIzm[i] = massIzm[i - 1];
    }
  }

  let arrIzm = [];
  for (let y = 0; y < massIzm.length; y++) {
    if (massIzm[y] != undefined) {
      arrIzm.push(massIzm[y]);
    }
  }
  return arrIzm;
};
