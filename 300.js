
function dp(nums) {
    if (nums.length === 1) return nums;
    
    let list = [];
    const arr = dp(nums.slice(0, nums.length - 1));
    const last = arr[arr.length - 1];
    const numsLast = nums[nums.length - 1];
    if ( numsLast > last) {
        list = [...arr, numsLast]
    } else {
        list = [...arr];
    }

    return list;
};

function lengthOfLIS(nums) {
    return dp(nums).length;
};

let nums;
nums = [10,9,2,5,3,7,101,18];
nums = [0,1,0,3,2,3]
const ret = lengthOfLIS(nums);

console.log(ret);
