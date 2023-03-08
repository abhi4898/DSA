/*

    * 
    * * 
    * * * 
    * * * * 
    * * * * *

*/

function leftAngleTringle(rows) {
  let str = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

console.log(leftAngleTringle(5));
