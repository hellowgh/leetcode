function erfen(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);
    const midNum = numbers[mid];
    if (midNum === target) {
      return mid;
    } else if (midNum > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

let numbers, target;

numbers = [1, 3, 4, 7, 8];
target = 8;

const ret = erfen(numbers, target);

console.log(ret);
