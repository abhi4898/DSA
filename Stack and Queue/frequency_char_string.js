let str = "aabbc";
let a = {};

for (const ele of str) {
  if (ele === " ") {
    continue;
  }
  if (ele in a) {
    a[ele] += 1;
  } else {
    a[ele] = 1;
  }
}

let minCount = 0;
let minChar = 0;

for (const key in a) {
  if (minCount == 0 || minCount > a[key]) {
    minCount = a[key];
    minChar = key;
  }
}
console.log(a);
console.log(minChar);

let n = "abc";
console.log(n[0].charCodeAt(0));
