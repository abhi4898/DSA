/*
    ****
    *  *
    *  *
    ****
*/

function hallowSquare(rows) {
  let str = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === rows - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

console.log(hallowSquare(4));
