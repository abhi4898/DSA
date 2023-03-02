function sumOfSubsequence(i, ds, s, sum, arr, n) {
  if (i === n) {
    if (s === sum) {
      console.log(ds);
      return;
    }
    return;
  }

  ds.push(arr[i]);
  s += arr[i];
  sumOfSubsequence(i + 1, ds, s, sum, arr, n);

  ds.pop();
  s -= arr[i];
  sumOfSubsequence(i + 1, ds, s, sum, arr, n);
}

function sumOfSubsequenceFirst(i, ds, s, sum, arr, n) {
  if (i === n) {
    if (s === sum) {
      console.log(ds);
      return true;
    }
    return false;
  }

  ds.push(arr[i]);
  s += arr[i];
  if (sumOfSubsequenceFirst(i + 1, ds, s, sum, arr, n)) return true;

  ds.pop();
  s -= arr[i];
  if (sumOfSubsequenceFirst(i + 1, ds, s, sum, arr, n)) return true;
}

function CountofSumOfSubsequence(i, s, sum, arr, n) {
  if (i === n) {
    if (s === sum) {
      return 1;
    }
    return 0;
  }

  s += arr[i];
  let l = CountofSumOfSubsequence(i + 1, s, sum, arr, n);

  s -= arr[i];
  let r = CountofSumOfSubsequence(i + 1, s, sum, arr, n);
  return l + r;
}

let arr = [1, 2, 1];
let n = arr.length;
console.log("Sum of all subsequences:");
sumOfSubsequence(0, [], 0, 2, arr, n);
console.log("Sum of First subsequences:");
sumOfSubsequenceFirst(0, [], 0, 2, arr, n);
console.log("Count of all subsequences:");
console.log(CountofSumOfSubsequence(0, 0, 2, arr, n));
