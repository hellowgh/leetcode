var threeSum = function (nums) {
  if (nums?.length < 3) {
    // 数组长度小于3，无解
    return [];
  }

  const arr = nums.sort((a, b) => a - b);
  const len = arr.length;
  const ret = [];

  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      // 排序后如果 arr[i] 大于0，后续每个值也一定大于0
      return ret;
    }

    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const leftNum = arr[left];
      const rightNum = arr[right];
      const sum = arr[i] + leftNum + rightNum;

      if (sum === 0) {
        ret.push([arr[i], leftNum, rightNum]);

        // 去重
        while (left < right && arr[left] === arr[left + 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right - 1]) {
          right--;
        }

        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ret;
};

// test

let nums;
nums = [0, 1, 1];
nums = [-1, 0, 1, 2, -1, -4];
// nums = [0, 0, 0];

const ret = threeSum(nums);

console.log(ret);
