function removeDuplicates(arr) {
  let i = 0;
  let j = 1;
  while (i < arr.length) {
    if (arr[i] === arr[j]) arr.splice(j, 1);
    else j++;
    if (j >= arr.length - 1) {
      i += 1;
      j = i + 1;
    }
  }
}
(function main() {
  let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  let n = arr.length;
  removeDuplicates(arr);
  console.log(arr);
})();

/******************** Method 2 ***************************/
function removeDuplicates(arr, n) {
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
}

(function main() {
  let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  let n = arr.length;
  const k = removeDuplicates(arr, n);
  arr.splice(k + 1);
  console.log(arr);
})();
