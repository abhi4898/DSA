// let arr = [1, 5, 5, 5, 2, 2, 2, 2];
let arr = [2, 5, 2, 8, 5, 6, 8, 8];

let freq = {};

arr.forEach((ele) => {
  if (ele in freq) {
    freq[ele] += 1;
  } else {
    freq[ele] = 1;
  }
});

arr = [];
for (var key in freq) {
  arr.push([parseInt(key), freq[key]]);
}

arr.sort((a, b) => {
  return b[1] > a[1] ? 1 : -1;
});

let newarr = [];
console.log(arr);
arr.forEach((ele) => {
  for (let i = 0; i < ele[1]; i++) {
    newarr.push(ele[0]);
  }
});
console.log(newarr);
