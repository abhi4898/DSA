/*
    A
    B B
    C C C
    D D D D
    E E E E E
*/

function alphaTriangleTwo(rows) {
    let ascii = 64
    let str = ''
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        str += String.fromCharCode(ascii + i) + ' '
    }
    str += '\n'
    ascii = 64
  }
  return str
}

console.log(alphaTriangleTwo(5));