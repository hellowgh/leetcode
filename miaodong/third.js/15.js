function threeSum(nums) {
  const ans = [];
  const len = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = len - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        ans.push([nums[i], nums[l], nums[r]]);
        r--;
        l++;
        while (nums[r + 1] === nums[r]) {
          r--;
        }
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return ans;
}

let nums;
nums = [-1, 0, 1, 2, -1, -4];

const ret = threeSum(nums);
console.log(ret);
