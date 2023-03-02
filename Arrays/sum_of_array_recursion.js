function sumArray(arr, n) {
  if (n < 1) return 0;

  return sumArray(arr, n - 1) + arr[n - 1];
}

let a = [1, 2, 3, 4, 5];
let n = a.length;
console.log(sumArray(a, n));
