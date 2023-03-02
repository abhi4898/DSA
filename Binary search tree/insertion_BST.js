class BST {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isNodeInserted(root, val) {
  while (root !== null && root.val !== null) {
    if (root.val === val) return true;
    root = root.val > val ? root.left : root.right;
  }
  return false;
}

function insertNode(root, val) {
  if (root === null) return new BST(val);
  let curRoot = root;
  while (true) {
    if (curRoot.val <= val) {
      if (curRoot.right !== null) {
        curRoot = curRoot.right;
      } else {
        curRoot.right = new BST(val);
        break;
      }
    } else {
      if (curRoot.val >= val) {
        if (curRoot.left !== null) {
          curRoot = curRoot.left;
        } else {
          curRoot.left = new BST(val);
          break;
        }
      }
    }
  }
  return root;
}

const root = new BST(6);
root.left = new BST(3);
root.left.left = new BST(2);
root.left.right = new BST(4);
root.right = new BST(8);
root.right.left = new BST(7);

var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Please Enter node to be inserted: ", (ip) => {
  userIp(ip);
  rl.close();
});

function userIp(ip) {
  let newNode = ip;
  const newRoot = insertNode(root, newNode);
  if (isNodeInserted(newRoot, newNode)) {
    console.log("Node Inserted!");
  } else {
    console.log("Node Not Inserted!");
  }
}
