// 有序数组，一般都可以用二分查找

var twoSum = function (numbers, target) {
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    let left = i;
    let right = len - 1;

    while (left <= right) {
      const mid = Math.ceil((right - left) / 2 + left);
      const diff = target - numbers[i];
      if (numbers[mid] === diff) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] > diff) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
};

// test
let numbers, target;
(numbers = [2, 7, 11, 15]), (target = 9);
// (numbers = [2, 3, 4]), (target = 6);
// (numbers = [-1, 0]), (target = -1);

const ret = twoSum(numbers, target);

console.log(ret);
