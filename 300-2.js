// 5.6

var lengthOfLIS2 = function(nums) {
    let ret = 0;

    function backtracking(nums, start, cur) {
        ret = Math.max(cur.length, ret);

        // terminal
        if (start >= nums.length) {
            return;
        }

        // pick
        if (cur.length === 0 || nums[start] > cur[cur.length - 1]) {
            // pick
            cur.push(nums[start]);

            // drill down
            backtracking(nums, start + 1, cur);

            // 顿悟：回溯的作用是恢复现场！
            cur.pop();
        }

        // not pick
        backtracking(nums, start + 1, cur);
    }

    backtracking(nums, 0, []);

    return ret;
};

// dp
var lengthOfLIS = function(nums) {
    // dp(i) -> 以 nums[i]结尾的LIS
    const list = Array.from({length: nums.length}, () => 1);

    for (let i = 1; i < nums.length; i++) {
        if (nums) {

        }
    }

    return Math.max(list);
};

const nums = [10,9,2,5,3,7,101,18];

console.log(lengthOfLIS(nums));
