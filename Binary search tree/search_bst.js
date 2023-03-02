class BST {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function searchInBST(root, searchVal) {
  while (root !== null && root.val !== null) {
    if (root.val === searchVal) {
      return true;
    }
    root = searchVal < root.val ? root.left : root.right;
  }
  return false;
}

const root = new BST(8);
root.left = new BST(3);
root.left.left = new BST(1);
root.left.right = new BST(6);
root.left.right.left = new BST(4);
root.left.right.right = new BST(7);
root.right = new BST(10);
root.right.right = new BST(14);
root.right.right.left = new BST(13);

if (searchInBST(root, 8)) {
  console.log("Value Found");
} else {
  console.log("Value not Found");
}
