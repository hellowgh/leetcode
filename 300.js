var lengthOfLIS = function (nums) {
  const len = nums.length;

  if (len === 0) {
    return;
  }

  const dp = new Array(len);

  for (let i = 0; i < len; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return Math.max(...dp);
};

let nums;
nums = [10, 9, 2, 5, 3, 7, 101, 18];
const ret = lengthOfLIS(nums);
console.log(ret);
