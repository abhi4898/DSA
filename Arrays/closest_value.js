var a = [1, 2, 3, 4, 6, 7, 8, 9],
  x = 5,
  diff = Number.MAX_VALUE,
  res = 0;

for (var i = 0; i < a.length; i++) {
  if (diff >= Math.abs(a[i] - x)) {
    diff = Math.abs(a[i] - x);
    res = a[i];
  }
}

console.log(res);
