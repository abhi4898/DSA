/*
      A
    A B A
  A B C B A
A B C D C B A
*/

function alphaPyramid(rows) {
  let ascii = 64;
  let str = "";
  for (let i = 1; i <= rows; i++) {
    // space
    for (let j = 1; j <= rows - i; j++) {
      str += "  ";
    }
    // chars
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(ascii + j) + " ";
    }
    //reversed chars
    for (let j = i; j > 1; j--) {
      str += String.fromCharCode(ascii + j - 1) + " ";
    }
    str += "\n";
    ascii = 64;
  }
  return str;
}

console.log(alphaPyramid(4));
