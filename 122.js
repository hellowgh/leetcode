// best time to buy and sell stock

/**
 * 本题提示：
 * 1.动态规划大部分好像都是从前往后算
 * 2.一定要明确dp的状态，比如这道题，每天的状态只有2个：持有或者卖掉
 * 3.相应地，子问题也是这样。每天只有2个状态
 * 4.子问题与今天的状态发生变化的过程，就是求解今天状态的过程，找出其最大值即可。'
 *
 * 5.最初没有加if(holding)条件，导致计算失败。这里跟背包问题一样，需要判断“能否装下”
 */

var maxProfit = function (prices) {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }

  const memo = {
    "0-true": -prices[0],
    "0-false": 0,
  };

  function dp(i, holding) {
    const key = `${i}-${holding}`;
    if (key in memo) {
      return memo[key];
    }

    if (holding) {
      memo[key] = Math.max(dp(i - 1, false) - prices[i], dp(i - 1, true));
    } else {
      memo[key] = Math.max(dp(i - 1, false), dp(i - 1, true) + prices[i]);
    }

    return memo[key];
  }

  return dp(len - 1, false);
};

function s2(prices) {
  const len = prices.length;
  if (len < 2) return 0;

  const arr = Array.from({ length: len }, () =>
    Array.from({ length: 2 }, () => 0)
  );
  arr[0][1] = -prices[0];

  for (let i = 1; i < len; i++) {
    arr[i][0] = Math.max(arr[i - 1][0], arr[i - 1][1] + prices[i]);
    arr[i][1] = Math.max(arr[i - 1][0] - prices[i], arr[i - 1][1]);
  }

  return arr[len - 1][0];
}

function s3(prices) {
  const len = prices.length;
  if (len < 2) return 0;

  let sell = 0;
  let has = -prices[0];

  for (let i = 1; i < len; i++) {
    sell = Math.max(sell, has + prices[i]);
    has = Math.max(sell - prices[i], has);
  }

  return sell;
}

let prices;
prices = [7, 1, 5, 3, 6, 4];

const ret = maxProfit(prices);
console.log(ret);
