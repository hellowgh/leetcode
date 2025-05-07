var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const ret = [];

    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = len - 1;

        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                ret.push([nums[i], nums[l], nums[r]]);

                l++;
                while(l < r && nums[l - 1] === nums[l]) {
                    l++;
                }
            } else if (sum > 0) {
                r--;
            } else {
                l++;
            }
        }
    }

    return ret;
};

let nums;
nums = [-1,0,1,2,-1,-4]
nums = [0,1,1]
nums = [0,0,0]

const ret = threeSum(nums);
console.log(ret);

console.log(Number.MIN_SAFE_INTEGER);