/*
    A B C D E
    A B C D
    A B C
    A B
    A
 */

function alphaTriangleInverted(rows) {
    let ascii = 64;
    let str = ''
    for (let i = rows; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            str += String.fromCharCode(ascii+j) + ' ';
        }
        str += '\n';
        ascii = 64
    }
    return str
}

console.log(alphaTriangleInverted(5));