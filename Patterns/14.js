/*
    A
    A B
    A B C
    A B C D
    A B C D E
 */

function alphaTriangle(rows) {
    let ascii = 64;
    let str = ''
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            str += String.fromCharCode(ascii + j) + ' '
        }
        str += '\n'
        ascii = 64
    }
    return str;
}

console.log(alphaTriangle(5));