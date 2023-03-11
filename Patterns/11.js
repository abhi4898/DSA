/*

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

function binaryNumbersRightAngledTriangle(rows) {
    let str = ''
    for (let i = 0; i < rows; i++) {
        if (i%2==0) {
            str += '1 '
        }else {
            str += '0 '
        }
        for (let j = 1; j <= i; j++) {
            if (j%2==0 && i%2==0) {
                str += '0 '
            }else {
                str += '1 '
            }
        }
        str += '\n'
    }
    return str
}

console.log(binaryNumbersRightAngledTriangle(5));