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

/***********************************************************************/

function recursiveBubbleSort(arr, n) {
  if (n === 1) return;
  const didSwap = false;
  for (let j = 0; j < n - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      didSwap = true;
    }
  }
  if (!didSwap) return;

  recursiveBubbleSort(arr, n - 1);
}

(function main() {
  let arr = [13, 46, 24, 52, 20, 9];
  let n = arr.length;
  recursiveBubbleSort(arr, n);
  console.log(arr);
})();
