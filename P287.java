public class P287 {
    public int findDuplicate(int[] nums) {
        /**
         * 这道题构造链表或者说图的方式很巧妙；根据题目限制，首先不会空指针；其次只有一个数字重复。那么就可以直接用数组来模仿链表了：
         * 数组中的值表示下一个节点的索引。比如数组:[1,3,4,2,2],慢指针走过的节点路径是：1→3→2→4→2→4→2。最终进入到了环中
         */

        int slow = nums[0];

        // 初始化时，就要走2步，否则下面的slow!=fast always false
        int fast = nums[nums[0]];

        while (slow != fast) {
            slow = nums[slow];

            // 这里实现了快指针走2步， nums[fast] 是1步，nums[nums[fast]]就是2步
            fast = nums[nums[fast]];
        }

        fast = 0;

        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return fast;
    }

    public static void main(String[] args) {
        P287 p = new P287();
        int[] arr1 = {1,3,4,2,2};
        System.out.println(p.findDuplicate(arr1));
    }
}
