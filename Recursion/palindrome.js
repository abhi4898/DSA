function checkPalindrome(i) {
  if (i >= Math.floor(str.length / 2)) return true;
  if (str[i] != str[str.length - i - 1]) return false;
  return checkPalindrome(i + 1);
}
const str = "MADAM";
if (checkPalindrome(0)) console.log("Palindrome");
else console.log("Not Palindrome");
