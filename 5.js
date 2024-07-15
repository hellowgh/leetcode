// longest palindromic substring

/**
 * 模仿人的查找策略：
 * 从左到右迭代向两边扩散；
 * 为什么区分偶数和奇数?
 * 初始化left和right时，如果两值相同，就只能匹配奇数的情况（中间一个字母一定相同，然后向外扩展）
 * 想要匹配偶数子串，需要left和right初始值相差1.
 * 移动指针的目的是为了尝试新的左右两边是否满足条件，因此一旦当前满足，就尝试向外扩展
 */

var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let longest = "";
  for (let i = 0; i < len; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right < len && s[left] === s[right]) {
      if (right + 1 - left > longest.length) {
        longest = s.substring(left, right + 1);
      }
      left--;
      right++;
    }

    left = i;
    right = i + 1;
    while (left >= 0 && right < len && s[left] === s[right]) {
      if (right + 1 - left > longest.length) {
        longest = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  }

  return longest;
};

let s;
const ret = longestPalindrome(s);
console.log(ret);
