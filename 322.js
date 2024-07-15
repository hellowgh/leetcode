// coin change

const memo = {};
var coinChange = function (coins, amount) {
  function dp(i, j) {
    const index = `${i}-${j}`;
    if (memo[index]) return memo[index];
    if (j === 0) return 0;
    if (i < 0) return Infinity;

    let pick = Infinity;
    if (j >= coins[i]) {
      pick = dp(i, j - coins[i]) + 1;
    }
    const pass = dp(i - 1, j);
    memo[index] = Math.min(pick, pass);
    return memo[index];
  }

  const ret = dp(coins.length - 1, amount);
  return ret === Infinity ? -1 : ret;
};

let coins;
let amount;
(coins = [1, 2, 5]), (amount = 5);
(coins = [2]), (amount = 3);
// coins = [186, 419, 83, 408];
// amount = 6249;

const ret = coinChange(coins, amount);
console.log(ret);
