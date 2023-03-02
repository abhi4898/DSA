class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrderTraversal(root) {
  let results = [];

  const lot = (root, level) => {
    if (!root) return;

    if (results[level]) {
      results[level].push(root.val);
    } else {
      if (root.val !== null) {
        results[level] = [root.val];
      }
    }
    lot(root.left, level + 1);
    lot(root.right, level + 1);
  };
  lot(root, 0);

  return results;
}

const node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);

node.left.left = new TreeNode(8);
node.left.right = new TreeNode(10);

node.right.left = new TreeNode(15);
node.right.right = new TreeNode(7);

console.log(levelOrderTraversal(node));
console.log(RVBT(node));
