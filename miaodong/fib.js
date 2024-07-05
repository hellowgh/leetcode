/**
 * 跟台阶问题同属于一阶动态规划
 */

function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

function loopFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let pre = 0;
  let cur = 1;

  for (let i = 2; i <= n; i++) {
    const next = pre + cur;
    pre = cur;
    cur = next;
  }

  return cur;
}

//
console.log(fib(5) === loopFib(5));

// dp与递归中的子问题差别，递归是随便就成找到子问题，

// 共同点是，都是假设别人已经实现了函数，解决了问题
