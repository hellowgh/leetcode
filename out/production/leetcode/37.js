var solveSudoku = function(board) {
    const isValid = (board, row, col, numStr) => {
        if (board[row].includes(numStr)) {
            return false;
        }

        const flag = board.some(ele => ele[col] === numStr);
        if (flag) {
            return false;
        }

        const i = Math.floor(row / 3) * 3;
        const j = Math.floor(col / 3) * 3;
        for (let r = i; r < i + 3; r++) {
            for (let c = j; c < j + 3; c++) {
                if (board[r][c] === numStr) {
                    return false;
                }
            }
        }

        return true;
    }

    const helper = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] !== '.') {
                    continue;
                }

                for (let i = 1; i <= 9; i++) {
                    const numStr = i.toString();
                    if (isValid(board, row, col, numStr)) {
                        // pick
                        board[row][col] = numStr;

                        // backtracking
                        const ret = helper(board);
                        if (ret) {
                            return ret;
                        }

                        // not pick
                        board[row][col] = '.';
                    }
                }

                return false;
            }
        }
        return true;
    }

    helper(board);
};

