/**
 * 跟台阶问题同属于一阶动态规划
 */

function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(10));

function loopFib(n) {
  let pre = 0;
  let cur = 1;
  let count = 1;

  while (count < n) {
    const cache = cur;
    cur = cur + pre;
    pre = cache;
    count++;
  }

  return ret;
}

// 
