public class P121 {
    public int maxProfit(int[] prices) {
        int slow = 0;
        int maxProfit = 0;

        for (int fast = 1; fast < prices.length; fast++) {
            if (prices[fast] > prices[slow]) {
                maxProfit = Math.max(maxProfit, prices[fast] - prices[slow]);
            } else {
                slow = fast;
            }
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices = {7,2,1, 5,3,6,4};

        P121 p = new P121();

        int ret = p.maxProfit(prices);

        System.out.println(ret);
    }
}
