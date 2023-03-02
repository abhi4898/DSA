// Using Recursion
function binarySearch(arr, key, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == key) return true;

  if (arr[mid] > key) {
    return binarySearch(arr, key, start, mid - 1);
  } else {
    return binarySearch(arr, key, mid + 1, end);
  }
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length - 1;
let key = 4;
if (binarySearch(arr, key, 0, n)) {
  console.log("Found!");
} else {
  console.log("Not Found!");
}

// Using While loop
function binarySearchV2(arr, key, start, end) {
  if (arr[start] === key || arr[end] === key) {
    return true;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == key) return true;
    else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

if (binarySearchV2(arr, key, 0, n)) {
  console.log("Found!!");
} else {
  console.log("Not Found!!");
}
