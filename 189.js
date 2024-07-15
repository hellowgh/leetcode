var rotate = function (nums, k) {
  const len = nums.length;
  if (len <= 1) {
    return nums;
  }

  let count = 0;
  let pre = 0;
  let temp = nums[pre];
  while (count < len) {
    const cur = (pre + k) % len;
    const cache = nums[cur];
    nums[cur] = temp;
    temp = cache;
    pre = cur;

    count++;
  }
};

let nums, k;
(nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);
(nums = [-1, -100, 3, 99]), (k = 2);
const ret = rotate(nums, k);
console.log(ret);
