// invert binary tree

/**
 * 这道简单题一开始都不会做了。。
 *
 * 一定要记住递归模板，填空即可
 */
var invertTree = function (root) {
  // 递归出口
  if (root === null) {
    return root;
  }

  // 具体操作（递归，就是对数据要做什么）
  // 有时因为 return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;这种操作，
  // 误以为递归中是可以没有具体操作的
  const temp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = temp;

  // 返回结果
  return root;
};
