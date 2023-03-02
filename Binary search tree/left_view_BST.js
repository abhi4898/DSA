class BST {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function rightViewBST(root, results, level) {
  if (root === null) return;

  if (results.length === level) {
    results.push(root.val);
  }

  rightViewBST(root.left, results, level + 1);
  rightViewBST(root.right, results, level + 1);
}

const root = new BST(6);
root.left = new BST(3);
root.left.left = new BST(2);
root.left.right = new BST(4);
root.left.right.right = new BST(5);
root.right = new BST(8);
root.right.left = new BST(7);

let results = [];
rightViewBST(root, results, 0);
console.log(results);
