// kth smallest element in a bst

var kthSmallest = function (root, k) {
  let ret = Number.MAX_SAFE_INTEGER;
  let count = 1;

  function dfs(root) {
    // 递归出口
    if (root === null) {
      return;
    }

    // 操作 & 递归
    dfs(root.left);
    if (count <= k) {
      const { val } = root;
      if (val !== undefined) {
        if (count === k) {
          ret = val;
        }
        count++;
      }
    }
    dfs(root.right);
  }

  dfs(root);

  return ret;
};
