function reverseArrayRec(fp, bp) {
  if (fp >= bp) {
    return;
  }

  // [arr[left],arr[right]] = [arr[right],arr[left]]
  temp = a[fp];
  a[fp] = a[bp];
  a[bp] = temp;
  reverseArrayLoop(fp + 1, bp - 1);
}

function reverseArrayRecV2(fp, n) {
  if (fp >= n / 2) {
    return;
  }

  temp = a[fp];
  a[fp] = a[n - fp];
  a[n - fp] = temp;
  reverseArrayRecV2(fp + 1, n);
}

function reverseArrayLoop(a) {
  let forwardPointer = 0;
  let backwardPointer = a.length - 1;

  while (forwardPointer <= backwardPointer) {
    temp = a[forwardPointer];
    a[forwardPointer] = a[backwardPointer];
    a[backwardPointer] = temp;
    forwardPointer++;
    backwardPointer--;
  }
  return a;
}

let a = [3, 1, 5, 2, 4];
let n = a.length - 1; //4
// console.log(reverseArrayLoop(a));
// reverseArrayRec(0, n);
reverseArrayRecV2(0, n);
console.log(a);
