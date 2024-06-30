public class P35 {
    public int searchInsert(int[] nums, int target) {
        var left = 0;
        var right = nums.length - 1;
        var mid = 0;

        while(left <= right) {
            mid = (right - left) / 2 + left;
            var midNum = nums[mid];

            if (midNum == target) {
                return mid;
            } else if (midNum > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (nums[mid] > target) {
            return mid - 1;
        }

        // todo 没能理解为什么最后left是插入位置
        return left;
    }
}
