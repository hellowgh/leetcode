// 存在重复元素

var containsNearbyDuplicate = function (nums, k) {
  let l = 0;
  let r = 0;
  const map = {};
  const len = nums.length;

  while (r < len) {
    const addNum = nums[r];
    if (addNum in map) {
      return true;
    }
    map[addNum] = r;
    r++;
    if (r - l > k) {
      const rmNum = nums[l];
      delete map[rmNum];
      l++;
    }
  }

  return false;
};

let nums, k;
(nums = [1, 2, 3, 1]), (k = 3);
(nums = [1, 2, 3, 1, 2, 3]), (k = 2);

const ret = containsNearbyDuplicate(nums, k);
console.log(ret);
