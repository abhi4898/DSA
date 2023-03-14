/*
   current element    new matrix
    4 4 4 4 4 4 4     0 0 0 0 0 0 0
    4 3 3 3 3 3 4     0 1 1 1 1 1 0
    4 3 2 2 2 3 4     0 1 2 2 2 1 0
    4 3 2 1 2 3 4     0 1 2 3 2 1 0
    4 3 2 2 2 3 4     0 1 2 2 2 1 0
    4 3 3 3 3 3 4     0 1 1 1 1 1 0
    4 4 4 4 4 4 4     0 0 0 0 0 0 0

    formula: rows = 4
    rows - each current element = new matrix
    rows - new matrix = current element 
*/

function numberSquarePattern(rows) {
  let str = "";
  for (let i = 0; i < 2 * rows - 1; i++) {
    for (let j = 0; j < 2 * rows - 1; j++) {
      let top = i;
      let left = j;
      let right = 2 * rows - 2 - j;
      let bottom = 2 * rows - 2 - i;
      let newMatrix = Math.min(top, left, right, bottom)
      str += `${rows - newMatrix} `;
    }
    str += "\n";
  }
  return str;
}

console.log(numberSquarePattern(4));
