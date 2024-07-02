public class P200 {
    public int numIslands(char[][] grid) {
        int l = grid[0].length;
        var h = grid.length;
        int ret = 0;
        for(int j = 0; j < h; j++) {
            for(int i = 0; i < l; i++) {
                System.out.println(grid[j][i]);
                if (grid[j][i] == '1') {
                    ret++;
                    dfs(grid, i, j);
                }
            }
        }
        return ret;
    }

    private void dfs(char[][] grid, int i, int j) {
        // exit
        // 1. out
        if (isOutGrid(grid, i, j)){
            return;
        }

        // 2. not an island
        if (grid[j][i] != '1') {
            return;
        }

        // operation
        grid[j][i] = '2';

        // recursive
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
    }

    private boolean isOutGrid(char[][] grid, int i, int j) {
        int l = grid[0].length;
        var h = grid.length;
        
        return (i < 0 || i >= l) || (j < 0 || j >= h);
    }
}
