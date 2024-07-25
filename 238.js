// product of array except self

var productExceptSelf = function(nums) {
    let leftProducts = 1;
    let rightProducts = 1;
    const len = nums.length;
    let l = 0;
    let r = len - 1;
    const ans = Array.from({length: len}, () => 1);

    while (l < len) {
        ans[l] *= leftProducts;
        ans[r] *= rightProducts;
        leftProducts *= nums[l];
        rightProducts *= nums[r];

        l++;
        r--;
    }

    return ans;
};

let nums;
nums = [1,2,3]
const ret = productExceptSelf(nums);
console.log(ret);