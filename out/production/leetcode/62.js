// unique paths

var uniquePaths = function(m, n) {
    const memo = {};
    
    function dp(i, j) {
        if (memo[`${i}-${j}`]) {
            return memo[`${i}-${j}`];
        }

        if (i === 0 || j === 0) {
            return 1;
        }

        memo[`${i}-${j}`] = dp(i - 1, j) + dp(i, j - 1);
    
        return memo[`${i}-${j}`]
    }

    return dp(m - 1, n - 1);
};

let m, n;
m = 3, n = 7

const ret = uniquePaths(m, n);
console.log(ret);