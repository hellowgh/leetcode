// average of levels in binary tree

var averageOfLevels = function (root) {
  const ret = [];
  let queue = [root];
  let cache = [];

  while (queue.length) {
    let sum = 0;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue[i];
      if (node) {
        cache.push(node.left, node.right);
        sum += node.val;
      }
    }
    ret.push(sum / len);

    queue = cache;
    cache = [];
  }

  return ret;
};

let root;
const ret = [3, 9, 20, null, null, 15, 7];

console.log(ret);
