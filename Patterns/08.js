/**
 
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *

 */

function reversePyramid(rows) {
  let str = "";
  for (let i = rows; i > 0; i--) {
    str += "  ".repeat(rows - i) + "* ".repeat(2 * i - 1);
    str += "\n";
  }
  return str;
}

console.log(reversePyramid(5));

/**
 * Formula generation
 *
 * n i => stars(n*2-1)  | spaces(n-i)
 * 5 5 => 5*2-1 = 9     | 5-5 = 0
 * 5 4 => 4*2-1 = 7     | 5-4 = 1
 * 5 3 => 3*2-1 = 5     | 5-3 = 2
 * 5 2 => 2*2-1 = 3     | 5-2 = 3
 * 5 1 => 1*2-1 = 1     | 5-1 = 4
 */
