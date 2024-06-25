import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class P169 {
    public int majorityElement(int[] nums) {

        return 0;
    }

    public static void main(String[] args) {
        P169 p169 = new P169();

        int[] nums = {2,2,1,1,1,2,2};

        int num = i;
        int count = 1;

        for (int n : nums) {
            if (count == 0) {
                num = n;
                count = 1;
            } else if (n == num) {
                count++;
            } else {
                count--;
            }
        }

        System.out.println(num);
    }
}
