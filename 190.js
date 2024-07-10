// rob

const memo = {};
function rob(nums) {
  const len = nums.length;
  if (len === 0) return 0;

  let pre = nums[0];
  let cur = Math.max(nums[0], nums[1]);

  // 从下到上
  // 状态转移公式 dp[i] = max(dp[i - 2] + num[i], dp[i - 1]);
  for (let i = 2; i < len; i++) {
    const temp = cur;
    cur = Math.max(pre + nums[i], cur);
    pre = temp;
  }

  return cur;
}

let nums;
nums = [2, 7, 9, 3, 1];
const ret = rob(nums);
console.log(ret);
