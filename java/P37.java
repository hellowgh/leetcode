public class P37 {
    private boolean isValid(char[][] board, int row, int col, char str) {
        // check the row
        for (int c = 0; c < 9; c++) {
            if (board[row][c] == str) {
                return false;
            }
        }

        // check the col
        for (int r = 0; r < 9; r++) {
            if (board[r][col] == str) {
                return false;
            }
        }

        // check the 3x3 block
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;
        for (int r = startRow; r < startRow + 3; r++) {
            for (int c = startCol; c < startCol + 3; c++) {
                if (board[r][c] == str) {
                    return false;
                }
            }
        }

        return true;
    }

    public void solveSudoku(char[][] board) {
        backtracking(board);
    }

    private boolean backtracking(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] != '.') {
                    continue;
                }

                for (int i = 1; i <= 9; i++) {
                    char numStr = (char)('0' + i);
                    if (isValid(board, row, col, numStr)) {
                        //     pick
                        board[row][col] = numStr;

                        //     backtracking
                        if (backtracking(board)) {
                            return true;
                        }

                        //     not pick
                        board[row][col] = '.';
                    }
                }

                return false;
            }
        }

        return true;
    }
}