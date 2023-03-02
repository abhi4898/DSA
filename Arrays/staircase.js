function stairCase(n, memory = {}) {
  if (n <= 1) {
    memory[n] = 1;
  }
  if (memory[n] == undefined) {
    memory[n] = stairCase(n - 1, memory) + stairCase(n - 2, memory);
  }
  return memory[n];
}

let n = 4;

console.log("V1:", stairCase(n, {}));
///////////////////////////////////////////////////

function stairCasev2(n) {
  var fibArray = [1, 1];
  for (let i = 1; i < n; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1]);
  }
  return fibArray[n];
}
console.log("V2:", stairCasev2(4));
///////////////////////////////////////////////////////

function stairCasev3(n) {
  var a = 1,
    b = 1,
    c;
  process.stdout.write("0 " + a + " " + b + " ");

  for (let i = 1; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    process.stdout.write(c + " ");
  }
  console.log();
  return c;
}
console.log("V3:", stairCasev3(4));
