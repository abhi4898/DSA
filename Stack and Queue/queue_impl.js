class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.push(val);
  }

  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }
  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }
  printQueue() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue();
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.printQueue();
