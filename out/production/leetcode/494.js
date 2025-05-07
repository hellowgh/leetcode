function targetSum(nums, target) {
    let count = 0;
    let sum = 0;
    const len = nums.length;

    function backtracking(nums, i, target) {
        // terminal
        if (i === len - 1) {
            return;
        }

        if(sum === target) {
            count++;
        }

        // pick +
        sum += nums[i];

        // drill down
        backtracking(nums, i + 1);

        // pick -
        sum = sum - nums[i];
    } 

    backtracking(nums, 0, target);

    return count;
}

let nums;
let target;

nums = [1,1,1,1,1], target = 3;

console.log(targetSum(nums, target));
