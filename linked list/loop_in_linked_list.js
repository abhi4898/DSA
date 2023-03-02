class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function isLoopInList(head) {
  if (head === null || head.next === null) return false;

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (fastPointer === slowPointer) {
      return true;
    }
  }
  return false;
}

const head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(5);
head.next.next.next.next.next = head.next.next;

if (isLoopInList(head)) {
  console.log("Loop found");
} else {
  console.log("loop not found");
}
