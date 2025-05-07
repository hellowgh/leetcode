// var uniquePathsWithObstacles = function(obstacleGrid) {
//     let ret = 0;
//     const rows = obstacleGrid.length;
//     const cols = obstacleGrid[0].length;

//     const map = {
//         '0-0': true,
//     }

//     function backtracking(matrix, i, j, map) {
//         const key = `${i}-${j}`;
//         if (key in map) {
//             if (map[key]) {
//                 ret++;
//                 return true;
//             }
//             return false;
//         }

//         // terminal
//         if (i < 0 || j < 0 || matrix[i][j] === 1) {
//             map[key] = false;
//             return false;
//         }

//         // left
//         const left = backtracking(matrix, i, j - 1, map);

//         if (left) {
//             map[key] = true;
//             return true;
//         }

//         // up
//         const up = backtracking(matrix, i - 1, j, map);
//         if (up) {
//             map[key] = true;
//             return true;
//         }

//         map[key] = false;
//         return false;
//     }

//     backtracking(obstacleGrid, rows - 1, cols - 1, map);

//     return ret;
// };


var uniquePathsWithObstacles = function(obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;
  let ret = 0;
  
  
};