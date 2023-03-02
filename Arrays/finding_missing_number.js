  function findingMissingNumber(a, obj) {
  for (let i = 1; i <= arr.length + 1; i++) {
    obj[i] = 0;
  }
  a.forEach((ele) => {
    if (ele in obj) {
      obj[ele] = 1;
    }
  });
  for (const item in obj) {
    if (obj[item] === 0) {
      console.log(item);
    }
  }
}

let arr = [1, 2, 4, 6, 3, 7, 8];
let obj = {};

findingMissingNumber(arr, obj);
/*******************************************************/

function findingMissingNumberV2(a, n) {
  let total = Math.floor((n + 1) * ((n + 2) / 2));
  a.forEach((ele) => {
    total -= ele;
  });
  console.log(total);
}

let arr2 = [3, 5, 1, 2];
let n = arr2.length;
findingMissingNumberV2(arr2, n);
