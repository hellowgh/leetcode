// maximum subarray
// second

var maxSubArray = function(nums) {
    let pre = 0;
    let max = nums[0];

    for (let n of nums) {
        pre = Math.max(pre + n, n);
        max = Math.max(max, pre);
    }

    return max;
};

let nums;
nums = [-2,1,-3,4,-1,2,1,-5,4];

const ret = maxSubArray(nums);

console.log(ret);