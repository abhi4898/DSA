function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let a = fibonacci(n - 1);
  let b = fibonacci(n - 2);
  return a + b;
}

function fibonacciWithMemory(n, memory = {}) {
  if (n <= 1) {
    return n;
  }
  if (memory[n] === undefined) {
    let a = fibonacciWithMemory(n - 1, memory);
    let b = fibonacciWithMemory(n - 2, memory);
    memory[n] = a + b;
  }

  return memory[n];
}

console.log(fibonacciWithMemory(4));
