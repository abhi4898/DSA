class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : left;
  }
}

let results = [];
function inorderTraversal(root) {
  if (!root) return;

  inorderTraversal(root.left);
  results.push(root.val);
  inorderTraversal(root.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(8);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(9);
root.right.right.right = new TreeNode(10);

inorderTraversal(root);
console.log(results);
