function transformArray(mass) {
  let massIzm = mass;

  for (let i = 0; i < massIzm.length; i++) {
    //console.log(mass[i]);

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
}

console.log(
  transformArray([
    1,
    2,
    3,
    "--double-next",
    31,
    32,
    "--discard-prev",
    4,
    5,
    "--discard-next",
    6,
    7,
    8,
    9,
    10,
    "--double-prev",
    11,
    12,
  ])
);

//console.log(transformArray[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]),
//[1, 2, 3, 4, 5]

//console.log(transformArray [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]),
// [1, 2, 3, 1337, 1337, 1337, 4, 5]
//console.log(transformArray[1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]),
// [1, 2, 3, 4, 5]
