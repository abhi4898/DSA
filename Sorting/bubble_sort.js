function bubbleSort(arr, n) {
  for (let i = n - 1; i >= 1; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
}

(function main() {
  let arr = [13, 46, 24, 52, 20, 9];
  let n = arr.length;
  bubbleSort(arr, n);
  console.log(arr);
})();
