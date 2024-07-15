// remove element

var removeElement = function (nums, val) {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      arr.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < arr.length) {
      nums[i] = arr[i];
    } else {
      nums[i] = "_";
    }
  }
};

let nums, val;
nums = [3, 2, 2, 3];
val = 3;

const ret = removeElement(nums, val);
console.log(ret);
