/*
Write a function in the language of your choice, which will take two inputs - a string and an integer.
The function will return a string which is similar to the original string, but with certain characters
removed. It will remove those characters whose consecutive length is exactly equal to the input number given.
E.g.
"aaabbbc", 3 => "c",
"abbbcddfg", 1 => "bbbdd",
"abcd", 2 => "abcd",
"abcd", 1 => "",
"aaabaaa", 3 => "b",
"aaaab", 3 => "aaaab",
"bbbaab", 3 => "aab",

Please test out ALL expamples given above.
*/


function removeChar(uIp, num){
    let strlist = uIp.split('')
    let slowPointer = 0;
    let fastPointer = 0;
    let count = 0

    while(fastPointer < strlist.length){
        if(strlist[slowPointer] === strlist[fastPointer]){
            count++;
            fastPointer++;
        }
        if(strlist[slowPointer] !== strlist[fastPointer]){
            if(count === num){
                strlist.splice(slowPointer,num)
                slowPointer = 0
                fastPointer = 0
            }
            else{
                slowPointer = fastPointer;
                fastPointer = slowPointer;
            }
            count = 0
        }
    }

    uIp='""'
    if(strlist.length > 0){
        uIp = strlist.join('')
    }
    return uIp
}

const userIp = 'aaabaaa'
const num = 3
const result = removeChar(userIp,num)
console.log(result)
