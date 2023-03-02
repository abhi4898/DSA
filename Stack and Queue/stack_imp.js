class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  top() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }

  printStack() {
    let str = "";
    this.items.forEach((ele) => {
      str += ele + " ";
    });
    return str;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty());

console.log(stack.pop());
console.log(stack.top());
console.log(stack.printStack());
