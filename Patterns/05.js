/*

* * * * *
* * * *
* * *
* *
*

*/

function invertedRightAngledTriangle(rows) {
  str = "";
  for (let i = rows; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

console.log(invertedRightAngledTriangle(5));
