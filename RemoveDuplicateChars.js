/*
Write a function in the language of your choice, which will take two inputs - a string and an integer
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
