/* 

1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5

*/

function leftAngleTringleWithNumbersOfi(rows){
    let str = ''

    for(let i=1; i<=rows; i++){
        for(let j=1; j<=i; j++){
            str += i + ' '
        }
        str += '\n'
    }
    return str
}

console.log(leftAngleTringleWithNumbersOfi(5))
