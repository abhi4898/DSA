function sumOfNaturalNums(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumOfNaturalNums(n - 1);
}

console.log(sumOfNaturalNums(5));

// Without recursion
function sumOfNaturalNums(n) {
  return (n*(n+1))/2;
}
