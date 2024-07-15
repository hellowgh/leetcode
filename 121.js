// best time to buy and sell stock

var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    max = Math.max(max, prices[i] - min);
  }

  return max;
};

function s2(prices) {
  let slow = 0;
  let maxProfit = 0;

  for (let fast = 0; fast < prices.length; i++) {
    if (prices[fast] > prices[slow]) {
      maxProfit = Math.max(maxProfit, prices[fast] - prices[slow]);
    } else {
      slow = fast;
    }
  }

  return maxProfit;
}

let prices;
prices = [7, 1, 5, 3, 6, 4];

const ret = maxProfit(prices);
console.log(ret);
