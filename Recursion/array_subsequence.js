function subSequence(i, ds, arr, n) {
  if (i == n) {
    if (ds.length !== 0) {
      console.log(ds);
    }
    if (ds.length === 0) {
      console.log("{}");
    }
    return;
  }

  subSequence(i + 1, ds, arr, n);
  ds.push(arr[i]);
  subSequence(i + 1, ds, arr, n);
  ds.pop();
}

let arr = [3, 1, 2];
let n = arr.length;
subSequence(0, [], arr, n);
