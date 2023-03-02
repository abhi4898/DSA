class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? 0 : left;
    this.right = right === undefined ? 0 : right;
  }
}

let results = [];

function postOrder(root) {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  results.push(root.val);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

postOrder(root);
console.log(results);
