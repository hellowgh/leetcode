// find minimum in rotated sorted array

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const mid = Math.floor((right - left) / 2 + left);
        const midNum = nums[mid];
        const rightNum = nums[right];

        if (midNum === rightNum) {
            return midNum;
        } else if (midNum < rightNum) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
};

let nums;
nums = [3,4,5,1,2];
const ret = findMin(nums);
console.log(ret);