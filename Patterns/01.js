/*
  
  * * * *
  * * * *
  * * * *
  * * * *

*/

function squarePattern(rows){
  let str = ''
  for(let i=0; i<rows; i++){
    for(let j=0; j<rows; j++){
        str += '* '
    }
    str += '\n'
  }
  return str
}

console.log(squarePattern(4))
