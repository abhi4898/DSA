/*
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *

*/

function pyramidPattern(rows) {
  let str = "";
  for (let i = 1; i <= rows; i++) {
    str += "  ".repeat(rows - i) + "* ".repeat(2 * i - 1);
    str += "\n";
  }
  return str;
}

console.log(pyramidPattern(5));

/**
 * formula generation
 * n i =>    spaces |    stars
 * 5 1 => (n-i) = 4 | (2*i-1) = 1
 * 5 2 => (n-i) = 3 | (2*i-1) = 3
 * 5 3 => (n-i) = 2 | (2*i-1) = 5
 * 5 4 => (n-i) = 1 | (2*i-1) = 7
 * 5 5 => (n-i) = 0 | (2*i-1) = 9
 */

