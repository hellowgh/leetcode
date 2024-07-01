// 矩阵半dfs

function isOut(grid, i, j) {
  const l = grid[0].length;
  const h = grid.length;

  return i > l - 1 || j > h - 1 || i < 0 || j < 0;
}

let ret = 0;

function dfs(grid, i, j) {
  // exit
  if (isOut(grid, i, j)) {
    return;
  }

  // 不是岛屿，就返回
  if (grid[j][i] !== "1") {
    return;
  }

  // operation
  grid[j][i] = "2";

  // recursive
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);

  // backtracking
  ret++;
}
