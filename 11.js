var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const l = right - left;
    const h = Math.min(numbers[left], numbers[right])
    const s = l * h;
  }
};

// test

let height;
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const ret = maxArea(height);

console.log(ret);
