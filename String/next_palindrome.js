function isPalindrome(num) {
  let rev = "";
  let temp = num;
  while (num != 0) {
    rev += num % 10;
    num = (num - (num % 10)) / 10;
  }
  if (rev == temp) return 1;
  return 0;
}

let n = 500;
while (isPalindrome(n) == 0) {
  n += 1;
}
console.log(n);
