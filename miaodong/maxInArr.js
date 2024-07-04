/**[3, 9, 1, 6]
 * 1.子问题 [3, 9, 1]
 * 2.别人已写好 maxInArr 函数
 * 3.基线条件
 */

let count = 0;

function maxInArr(arr) {
  count++;
  if (arr.length < 1) return null;
  if (arr.length === 1) return arr[0];
  return Math.max(maxInArr(arr.slice(0, arr.length - 2)), arr[arr.length - 1]);
}

let arr;
arr = [3, 9, 1, 6];
console.log(maxInArr(arr));
console.log(count);
