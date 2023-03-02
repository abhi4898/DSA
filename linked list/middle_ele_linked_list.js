class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function middleElement(head) {
  var slowPointer = head;
  var fastPointer = head;
  if (head != null) {
    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    // return slowPointer.val;
    return (head = slowPointer);
  }
}

function sizeOfLL(head) {
  if (head != null) {
    let slowPointer = head;
    let count = 0;
    while (slowPointer !== null) {
      slowPointer = slowPointer.next;
      count++;
    }
    return count;
  }
}

const head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(5);

console.log("Middle:", middleElement(head));
console.log("size:", sizeOfLL(head));
