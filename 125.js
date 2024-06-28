/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  const reg = /[0-9a-zA-Z]/;

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (!reg.test(leftChar)) {
      left++;
      continue;
    }

    if (!reg.test(rightChar)) {
      right--;
      continue;
    }

    if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// test
let s;

// s = "A man, a plan, a canal: Panama";
// s = "race a car";
// s = " ";
s = "0P";

const ret = isPalindrome(s);
console.log(ret);
