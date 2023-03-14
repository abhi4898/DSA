/*
    E        
    D E      
    C D E    
    B C D E  
    A B C D E
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
