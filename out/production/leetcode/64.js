// minimum path sum

var minPathSum = function(grid) {
    if (grid.length === 0) return 0;

    const memo = {
        '0-0': grid[0][0],
    }

    function dp(i, j) {
        if (i === j === 0) return grid[0][0];
        if (i < 0 || j < 0) return Infinity;

        return Math.min(dp(i - 1, j), dp(i, j - 1)) + grid[i, j]
    }

    const h = grid.length;
    const w = grid[0].length;
    return dp(h - 1, w - 1)
};

function solution (grid) {
    const h = grid.length;
    const w = grid[0].length;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (i === 0 && j === 0) continue;
            const left = grid[i]?.[j - 1] ?? Number.MAX_SAFE_INTEGER;
            const up = grid[i - 1]?.[j] ?? Number.MAX_SAFE_INTEGER;

            grid[i][j] = Math.min(left, up) + grid[i][j];
        }
    }

    return grid[h - 1][w - 1];
}

let grid;
grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
]
grid = [[1,2,3],[4,5,6]]
// const ret = minPathSum(grid);
// console.log(ret);
console.log(solution(grid));