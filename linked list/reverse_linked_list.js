class ListNode {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverseList(node) {
  var prev = null;
  var next = null;
  var current = node;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

function printList(node) {
  while (node != null) {
    process.stdout.write(node.data + " ");
    node = node.next;
  }
}

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

head = reverseList(head);
printList(head);
