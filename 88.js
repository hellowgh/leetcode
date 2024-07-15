// merge sorted array

var merge = function (nums1, m, nums2, n) {
  let left = 0;
  let right = 0;
  const arr = new Array(m + n);

  while (right < n || left < m) {
    const n1 = nums1[left];
    const n2 = nums2[right];
    let temp = -1;
    if (left === m) {
      temp = n2;
      right++;
    } else if (right === n) {
      temp = n1;
      left++;
    } else if (n1 > n2) {
      temp = n2;
      right++;
    } else {
      temp = n1;
      left++;
    }
    arr[left + right - 1] = temp;
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = arr[i];
  }
};

let nums1, nums2;

(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
console.log(merge(nums1, n, nums2, n));
