/*

    * 
    * * 
    * * * 
    * * * * 
    * * * * *
    * * * *
    * * *
    * *
    *
    * 
*/

function rightSideRotatedTriangle(rows) {
  let str = "";
  for (let i = 1; i <= rows; i++) {
    str += "* ".repeat(i);
    str += "\n";
  }
  for (let j = rows-1; j > 0; j--) {
    str += "* ".repeat(j);
    str += "\n";
  }
  return str;
}

console.log(rightSideRotatedTriangle(5));
