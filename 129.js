// sum root to leaf numbers

/**
 * path相关万能公式
 */

var sumNumbers = function (root) {
  const path = [];
  let ret = 0;
  function dfs(root) {
    // exit
    if (root === null) {
      return;
    }

    // operation
    path.push(String(root.val));
    if (root.left === null && root.right === null) {
      ret += Number(path.join(""));
    }

    // recursive
    dfs(root.left);
    dfs(root.right);

    // backtracking
    path.pop();
  }

  dfs(root);

  return ret;
};
