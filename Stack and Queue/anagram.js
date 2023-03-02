// function anagram(str1, str2) {
//   let freqStr1 = {};
//   let freqStr2 = {};

//   for (let ele = 0; ele < str1.length; ele++) {
//     if (str1[ele] in freqStr1) {
//       freqStr1[str1[ele]] += 1;
//     } else {
//       freqStr1[str1[ele]] = 1;
//     }
//     if (str2[ele] in freqStr2) {
//       freqStr2[str2[ele]] += 1;
//     } else {
//       freqStr2[str2[ele]] = 1;
//     }
//   }
// }

let str1 = "listen";
let str2 = "list";

str1 = str1.split("");
str2 = str2.split("");
console.log(str1);
let c = 0;
if (str1.length >= str2.length) {
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) > -1) {
      c++;
    }
  }
}

if (str1.length >= c) {
  console.log("anagram");
} else {
  console.log("no");
}

// anagram(str1, str2);
