function jump(nums) {
  const len = nums.length;
  const dp = Array.from({ length: len }, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 0; i < len; i++) {
    const maxRight = i + nums[i];
    // mistake j <= maxRight 而非 <
    for (let j = i + 1; j < len && j <= maxRight; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  return dp[len - 1];
}

[0, 1, 1, 2, 2, 2];

let nums = [2, 3, 0, 1, 4];
const ret = jump(nums);
console.log(ret);
