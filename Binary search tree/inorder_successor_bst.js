class BST {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderSuccessor(root, val, successor) {
  if (root === null) {
    return successor;
  } else if (root.val > val) {
    successor = root.val;
    return inorderSuccessor(root.left, val, successor);
  } else if (root.val <= val) {
    return inorderSuccessor(root.right, val, successor);
  }
}

function inorderSuccessorV2(root, val) {
  let successor = null;
  while (root !== null) {
    if (root.val > val) {
      successor = root.val;
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return successor;
}

const root = new BST(5);
root.left = new BST(2);
root.left.left = new BST(1);
root.left.right = new BST(4);
root.left.right.left = new BST(3);
root.right = new BST(7);
root.right.left = new BST(6);
root.right.right = new BST(9);
root.right.right.left = new BST(8);
root.right.right.right = new BST(10);

let key = 6;
let successor = null;
console.log(inorderSuccessor(root, key, successor));
console.log(inorderSuccessorV2(root, key));
