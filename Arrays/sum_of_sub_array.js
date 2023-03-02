function sumOfSubarray(a) {
  let total = 0;
  let n = a.length;

  a.forEach((ele, i) => {
    total += ele * (n - i) * (i + 1);
  });
  return total;
}

let arr = [3, 2, 5, 1, 6];
let res = sumOfSubarray(arr);
console.log(res);
