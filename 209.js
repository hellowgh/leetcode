var minSubArrayLen = function (target, nums) {
  let l = 0;
  let r = 0;
  let sum = nums[0];
  let ret = Infinity;
  const len = nums.length;

  while (r < len) {
    if (sum >= target) {
      ret = Math.min(ret, r - l + 1);

      sum -= nums[l];
      l++;
    } else {
      r++;
      sum += nums[r];
    }
  }

  return ret === Infinity ? 0 : ret;
};

// test

let target, nums;
(target = 7), (nums = [2, 3, 1, 2, 4, 3]);

const ret = minSubArrayLen(target, nums);

console.log(ret);
