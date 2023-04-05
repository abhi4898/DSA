function unionOfArrays(arr1, arr2, n, m) {
  let i = 0,
    j = 0,
    union = [];
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n) {
    if (union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }
  while (j < m) {
    if (union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
  return union;
}

function intersectionOfArrays(arr1, arr2, n, m) {
  let i = 0,
    j = 0,
    intersection = [];

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) i++;
    else if (arr2[j] < arr1[i]) j++;
    else {
      intersection.push(arr1[i]);
      i++;
      j++;
    }
  }
  return intersection;
}

(function main() {
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr2 = [2, 3, 4, 4, 5, 11, 12];
  let union = unionOfArrays(arr1, arr2, arr1.length, arr2.length);
  let intersection = intersectionOfArrays(arr1, arr2, arr1.length, arr2.length);
  console.log(union);
  console.log(intersection);
})();
