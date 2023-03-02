/*
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5 
*/

function leftAngleTringleWithNumbers(rows){
    let str = ''

    for(let i=0; i<rows; i++){
        for(let j=0; j<=i; j++){
            str += `${j+1} `
        }
        str += '\n'
    }
    return str
}

console.log(leftAngleTringleWithNumbers(5))

