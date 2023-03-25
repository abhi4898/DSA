function partition(arr, start, end) {
  let pivot = arr[start];
  let i = start + 1;

  for (let j = start + 1; j <= end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i - 1, start);
  return i - 1;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function quickSort(arr, start, end) {
  if (start < end) {
    let pivotPos = partition(arr, start, end);
    quickSort(arr, start, pivotPos - 1);
    quickSort(arr, pivotPos + 1, end);
  }
}

(function main() {
  let arr = [5, 7, 8, 3, 2, 1];
  let len = arr.length;

  quickSort(arr, 0, len);
  console.log(arr);
})();
