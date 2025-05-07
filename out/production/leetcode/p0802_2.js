var pathWithObstacles = function(obstacleGrid) {
    const ret = [];
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;

    function backtracking(grid, row, col, map) {
        if (row >=rows || col >= cols) {
            return false;
        }

        if (grid[row][col] === 1) {
            return false;
        }

        const key = `${row}-${col}`;
        if (key in map && !map[key]) {
            return false;
        }

        ret.push([row, col]);

        if (row === rows - 1 && col === cols -1) {
            return true;
        }

        // drill down
        // right
        const right = backtracking(grid, row, col + 1, map);
        if (right) {
            return true;
        }


        // down
        const down = backtracking(grid, row + 1, col, map);
        if (down) {
            return true;
        }

        // back
        map[key] = false;
        ret.pop();
    }

    backtracking(obstacleGrid, 0, 0, {})

    return ret;
};

const grid = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]

  console.log(pathWithObstacles(grid));