/*

E           69
D E         68 69
C D E       67 68 69
B C D E     66 67 68 69
A B C D E   65 66 67 68 69

 */

function inverseAlphaTriangle(rows) {
  let ascii = 64 + rows - 1;
  let str = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(ascii + j) + " ";
    }
    str += "\n";
    ascii -= 1;
  }
  return str;
}

console.log(inverseAlphaTriangle(5));
