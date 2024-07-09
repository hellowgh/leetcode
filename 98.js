// valid BST

let cache = -Infinity;
let ret = true;
var isValidBST = function (root) {
  if (root === null) {
    return false;
  }

  isValidBST(root.left);

  if (root.val <= cache) {
    ret = false;
  } else {
    cache = root.val;
  }

  isValidBST(root.right);

  return ret;
};

var isValidBST2 = function (root) {
  const stack = [];
  let cur = root;
  let pre = -Infinity;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    if (cur && pre >= cur.val) {
      return false;
    }
    pre = cur.val;

    cur = cur.right;
  }

  return true;
};
