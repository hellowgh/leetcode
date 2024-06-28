// symmetric tree

var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  function helper(left, right) {
    // 出口
    if (left === null && right === null) {
      return true;
    } else if (left === null || right === null) {
      return false;
    } else if (left.val !== right.val) {
      return false;
    } else {
      // 递归 & 返回结果
      return helper(left.left, right.right) && helper(left.right, right.left);
    }
  }

  return helper(root.left, root.right);
};

// 迭代法
function iteration(root) {
  function helper(left, right) {
    const q = [left, right];

    while (q.length) {
      const i = q.pop();
      const j = q.pop();

      if (i === null && j === null) {
        continue;
      } else if (i === null || j === null) {
        return false;
      } else if (i.val !== j.val) {
        return false;
      }

      q.push(i.left);
      q.push(j.right);

      q.push(i.right);
      q.push(j.left);
    }

    return true;
  }

  return helper(root, root);
}
