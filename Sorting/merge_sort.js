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
