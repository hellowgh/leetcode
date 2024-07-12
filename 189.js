// 189 rotate array

var rotate = function(nums, k) {
    const len = nums.length;
    if (len <= 1) return nums;
    
    const arr = new Array(len);

    for(let i = 0; i < len; i++) {
        let index = i + k;
        if (index >= len) {
            index = index - len;
        }
        arr[index] = nums[i];
    }

    for (let i = 0; i < len; i++) {
        nums[i] = arr[i]
    }
};

let nums, k;
nums = [1,2,3,4,5,6,7], k = 3
const ret = rotate(nums, k);
console.log(ret);