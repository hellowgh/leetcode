// coin change

var coinChange = function (coins, amount) {
  function dp(i, j) {
    if (j === 0) return 0;
    if (i < 0) return Infinity;
    let pick = Infinity;
    if (j >= coins[i]) {
      const count = Math.floor(j / coins[i]);
      pick = dp(i - 1, j - count * coins[i]) + count;
    }
    const pass = dp(i - 1, j);
    return Math.min(pick, pass);
  }

  const ret = dp(coins.length - 1, amount);
  return ret === Infinity ? -1 : ret;
};

let coins, amount;
(coins = [1, 2, 5]), (amount = 5);
(coins = [1]), (amount = 0);
// (coins = [2]), (amount = 3);
coins = [186, 419, 83, 408];
amount = 6249;

const ret = coinChange(coins, amount);
console.log(ret);
