// jump game2
// second

var jump = function (nums) {
  const len = nums.length;
  let jumps = 0;
  let currentEnd = 1;
  let farthest = 0;

  // 没能理解为什么这里是 len - 1，而不是 len。
  for (let i = 0; i < len - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (currentEnd === i) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
};

// 极值 + 限制 = 动态规划
function s2(nums) {
  const len = nums.length;
  const dp = Array.from({ length: len }, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 0; i < len; i++) {
    const maxRight = i + nums[i];
    for (let j = i + 1; j <= maxRight && j < len; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  return dp[len - 1];
}

function s3(nums) {
  function dp(nums, i) {
    if (i === 0) {
      return 0;
    }

    return dp(nums);
  }
}

let nums = [2, 3, 0, 1, 4];
const ret = s2(nums);
console.log(ret);
