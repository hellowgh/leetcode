var maxDepth = function (root) {
  if (!root) {
    // 递归出口
    return 0;
  }

  // 具体操作（递归）
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  // 返回结果
  return Math.max(left, right) + 1;
};
