// lowest common ancestor of a binary tree

// 万能path公式

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }

  if (root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left === null && right === null) {
    return null;
  }
  if (left === null || right === null) {
    return left ? left : right;
  }
  return root;
};
