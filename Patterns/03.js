/*
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5 
*/

function leftAngleTringleWithNumbers(rows){
    let str = ''

    for(let i=1; i<=rows; i++){
        for(let j=1; j<=i; j++){
            str += j + ' '
        }
        str += '\n'
    }
    return str
}

console.log(leftAngleTringleWithNumbers(5))

