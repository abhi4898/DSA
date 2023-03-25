function selectionSort(arr, n) {
  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}

(function main() {
  let arr = [13, 46, 24, 52, 20, 9];
  let n = arr.length;
  selectionSort(arr, n);
  console.log(arr);
})();
