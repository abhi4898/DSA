function printSubArray(arr, currIndex, sum) {
  if (currIndex === arr.length) return;

  result = "";
  for (let i = currIndex; i < arr.length; i++) {
    sum += arr[i];
    result += " " + arr[i] + " ";
    process.stdout.write("[" + result + "]" + " ");
    console.log(`${arr[i]} = ${sum}`);
  }
  printSubArray(arr, currIndex + 1, sum);
}

let a = [1, 2, 3];
let sum = 0;
printSubArray(a, 0, sum);
// console.log(sum);
