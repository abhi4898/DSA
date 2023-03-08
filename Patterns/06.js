/*

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

function invertedRightAngledTriangleWithNumbers(rows) {
  let str = "";
  for (let i = rows; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    str += "\n";
  }
  return str
}

console.log(invertedRightAngledTriangleWithNumbers(5));
