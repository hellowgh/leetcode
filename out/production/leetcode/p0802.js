var pathWithObstacles = function(obstacleGrid) {
    const ret = [];
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;

    function dp(matrix, i, j, map = {}) {
        if (i < 0 || j < 0) {
            return false;
        }

        if (matrix[i][j] === 1) {
            return false;
        }

        const key = `${i}-${j}`;

        if (key in map && !map[key]) {
            return false;
        }

        ret.unshift([i, j]);

        // left
        const left = dp(matrix, i, j - 1, map);
        if (left) {
            map[key] = true;
            return true;
        }

        // up
        const up = dp(matrix, i - 1, j, map);
        if (up) {
            map[key] = true;
            return true;
        }

        map[key] = false;

        // back
        ret.shift();
    }

    dp(obstacleGrid, rows - 1, 0)

    return ret;
};

const grid = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]

  console.log(pathWithObstacles(grid));
  