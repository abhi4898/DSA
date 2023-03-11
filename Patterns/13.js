/*
    1
    2 3
    4 5 6
    7 8 9 10
    11 12 13 14 15

*/

function numberRightAngledTriangle(rows) {
  let str = "";
  let num = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      str += num + " ";
      num++;
    }
    str += "\n";
  }
  return str;
}

console.log(numberRightAngledTriangle(5));
