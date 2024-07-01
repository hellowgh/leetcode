// path sum

// root-to-path

function isLeaf(node) {
  return node.left === null && node.right === null;
}

var hasPathSum = function (root, targetSum) {
  let sum = 0;
  let flag = false;
  function dfs(root) {
    // 出口
    if (root === null) {
      return;
    }

    // 操作
    sum += root.val;
    if (sum === targetSum && isLeaf(root)) {
      flag = true;
    }

    // 递归
    dfs(root.left);
    dfs(root.right);

    // 回溯
    sum -= root.val;
  }

  dfs(root);

  return flag;
};

// 方法二：迭代法
function iterator(root) {
  const q = [root];

  while (q.length) {
    const node = q.pop();

    console.log(node.value);

    if (node.left) {
      q.push(node.left);
    }

    if (node.right) {
      q.push(node.right);
    }
  }
}
