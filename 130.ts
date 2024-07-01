// surrounded regions
function solve(board: string[][]): void {
  const l = board[0].length;
  const h = board.length;

  // 遍历2竖
  const arr1 = [0, l - 1];
  arr1.forEach((i) => {
    for (let j = 0; j < h; j++) {
      if (board[j][i] === "O") {
        DFSGrid(board, i, j);
      }
    }
  });

  // 遍历2横
  const arr2 = [0, h - 1];
  for (let j of arr2) {
    for (let i = 0; i < l; i++) {
      if (board[j][i] === "O") {
        DFSGrid(board, i, j);
      }
    }
  }

  // bfs后，为T的节点就是与边缘相连的O
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < l; i++) {
      if (board[j][i] === "T") {
        board[j][i] = "O";
      } else {
        board[j][i] = "X";
      }
    }
  }
}

function DFSGrid(board: string[][], i, j) {
  // exit
  const l = board[0].length;
  const h = board.length;
  if (i < 0 || i > l - 1 || j < 0 || j > h - 1) {
    return;
  }

  if (board[j][i] !== "O") {
    return;
  }

  // operation
  board[j][i] = "T";

  // recursive
  DFSGrid(board, i, j - 1);
  DFSGrid(board, i, j + 1);
  DFSGrid(board, i - 1, j);
  DFSGrid(board, i + 1, j);
}
