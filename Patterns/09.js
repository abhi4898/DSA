/**
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *

 */

function rhombusPattern(rows) {
  let str = "";
  for (let i = 1; i <= rows; i++) {
    str += "  ".repeat(rows - i) + "* ".repeat(2 * i - 1);
    str += "\n";
  }
  for (let j = rows; j > 0; j--) {
    str += "  ".repeat(rows - j) + "* ".repeat(2 * j - 1);
    str += "\n";
  }
  return str;
}

console.log(rhombusPattern(5));
