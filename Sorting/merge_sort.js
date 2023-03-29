function merge(leftArray, rightArray) {
  let res = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    let leftele = leftArray[leftIndex];
    let rightele = rightArray[rightIndex];

    if (leftele < rightele) {
      res.push(leftele);
      leftIndex++;
    } else {
      res.push(rightele);
      rightIndex++;
    }
  }

  //   for (let i = leftIndex; i < leftArray.length; i++) {
  //     res.push(leftArray[i]);
  //   }
  //   for (let j = rightIndex; j < rightArray.length; j++) {
  //     res.push(rightArray[j]);
  //   }
  //   return res;

  return [
    ...res,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  let leftArray = mergeSort(left);
  let rightArray = mergeSort(right);
  return merge(leftArray, rightArray);
}

//for arrays
let a = [5, 7, 8, 3, 2, 1];
console.log(mergeSort(a));

// for String
// let a = "abih";
// let result = mergeSort(a);
// console.log(result.join(""));

/*********************** solution 2 ***********************************/

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  // adding elements to the temp in sorted order
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // pushing remaining elements in left or right
  // to the temp array
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // sorting the original array using temp array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

(function main() {
  let arr = [6, 2, 7, 3, 4, 8, 5];
  let n = arr.length;
  mergeSort(arr, 0, n - 1);
  console.log(arr);
})();

/************************merge sort with user input***********************/
function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low == high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

(function getUserInput() {
  let n = 0;
  let c = 0;
  let arr = [];
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (userInput) => {
    if (c == 0) {
      n = userInput;
      c++;
    } else if (c == 1) {
      arr = userInput.split(" ").map((ele) => +ele);
      if (arr.length != n) {
        console.log("Please enter correct array with given size.");
        rl.close();
        return;
      }
      mergeSort(arr, 0, n - 1);
      console.log(arr);
      rl.close();
    }
  });
})();
