import java.util.List;

public class P150 {
    public int minimumTotal(List<List<Integer>> triangle) {
        int len = triangle.size();

        for (int i = len - 2; i >= 0; i--) {
            List<Integer> curRow = triangle.get(i);
            List<Integer> nextRow = triangle.get(i - 1);

            for (int j = 0; j < curRow.size(); j++) {
                int minSum = Math.min(nextRow.get(j), nextRow.get(j + 1)) + curRow.get(j);
                curRow.set(j, minSum);
            }
        }

        return triangle.get(0).get(0);
    }
}
