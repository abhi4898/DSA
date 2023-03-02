class BST {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function deleteNode(root, del) {
  if (root === null) return null;

  if (root.val === del) return helper(root);

  dummyRoot = root;

  while (root != null) {
    if (root.val > del) {
      if (root.left !== null && root.left.val === del) {
        root.left = helper(root.left);
        break;
      } else {
        root = root.left;
      }
    } else {
      if (root.right !== null && root.right.val === del) {
        root.right = helper(root.right);
        break;
      } else {
        root = root.right;
      }
    }
  }
  return dummyRoot;
}

function helper(root) {
  if (root.left === null) return root.right;
  else if (root.right === null) return root.left;
  else {
    rightChild = root.right;
    lastRightOfLC = findLastRight(root.left);
    lastRightOfLC.right = rightChild;
    return root.left;
  }
}

function findLastRight(root) {
  if (root.right === null) return root;

  return findLastRight(root.right);
}

const root = new BST(6);
root.left = new BST(3);
root.left.left = new BST(2);
root.left.right = new BST(4);
root.right = new BST(8);
root.right.left = new BST(7);

let del = 3;
let newRoot = deleteNode(root, del);

console.log(newRoot);
