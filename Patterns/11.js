/*

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

function binaryNumbersRightAngledTriangle(rows) {
  let str = "";
  let bin = 1;
  for (let i = 0; i < rows; i++) {
    if (i % 2 == 0) bin = 1;
    else bin = 0;
    for (let j = 0; j <= i; j++) {
      str += `${bin} `;
      bin = 1 - bin;
    }
    str += "\n";
  }
  return str;
}

console.log(binaryNumbersRightAngledTriangle(5));
