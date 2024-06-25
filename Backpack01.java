import java.util.ArrayList;
import java.util.List;

class Good {
    private int value;
    private int weight;

    public Good(int value, int weight) {
        this.value = value;
        this.weight = weight;
    }

    public int getValue() {
        return value;
    }

    public int getWeight() {
        return weight;
    }
}

public class Backpack01 {
    public int dp(int i , int j,  List<Good> goods) {
        if (i<= 0 || j <= 0) {
            return 0;
        }

        // 不装第i个物品的最大收益
        int val1 = dp(i - 1, j, goods);

        // 能装下且装第i个物品
        int val2 = 0;
        if (j >= goods.get(i).getWeight()) {
            val2 = goods.get(i).getValue() + dp(i - 1, j - goods.get(i).getWeight(), goods);
        }

        return Math.max(val1, val2);
    }


    public static void main(String[] args) {
        List<Good> goods = new ArrayList<>();
        goods.add(new Good(0, 0));
        goods.add(new Good(6, 1));
        goods.add(new Good(10, 2));
        goods.add(new Good(12, 3));

        Backpack01 backpack01 = new Backpack01();

        int ret = backpack01.dp(3, 5, goods);
        System.out.println(ret);
    }
}
