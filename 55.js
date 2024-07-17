// jump game

var canJump = function(nums) {
    const len = nums.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        if (i <= max) {
            max = Math.max(max, i + nums[i]);
            if (max >= len - 1) {
                return true;
            }
        }
    }
    return false;
};