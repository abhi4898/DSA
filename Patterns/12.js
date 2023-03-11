/*
    1             1
    1 2         2 1
    1 2 3     3 2 1
    1 2 3 4 4 3 2 1

*/

function numberMirrorPattern(rows) {
  let str = "";
  for (let i = 1; i <= rows; i++) {
    // numbers
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    // space
    for (let j = 2 * i; j < 2 * rows; j++) {
      str += "  ";
    }
    // numbers
    for (let j = i; j > 0; j--) {
      str += j + " ";
    }
    str += "\n";
  }
  return str;
}

console.log(numberMirrorPattern(4));
