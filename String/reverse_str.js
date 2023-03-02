let str = "abcd";
let s = 0;
let e = str.length - 1;

while (s <= e) {
  temp = str[s];
  str[s] = str[e];
  str[e] = temp;
  s += 1;
  e -= 1;
}
let str2 = str.replace(str[0], "s");
console.log(str2);
