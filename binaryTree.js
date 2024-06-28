const binaryTree = {
  value: 6,
  left: {
    value: 3,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    value: 9,
    left: {
      value: 8,
      left: {
        value: 7,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 10,
      left: null,
      right: null,
    },
  },
};

function dfs(root) {
  if (root === null) {
    return;
  }

  dfs(root.left);
  console.log(root.value);
  dfs(root.right);
}

// 函数是用栈调用的，因此如果使用循环实现，必须自己调度栈
// 另外需要注意，栈的特性：先进后出，因此如果是后续遍历，需要先push right节点，
// 再push left节点
// 94题中序遍历
function loop(root) {
  let cur = root;
  const stack = [];

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    console.log(cur.value);

    cur = cur.right;
  }
}

loop(binaryTree);
