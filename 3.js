var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 0;
  const len = s.length;
  let ret = 1;
  const map = {};

  // 完全模拟人的行为
  while (r < len) {
    const letter = s[r];
    if (map[letter]) {
      map[letter]++;

      while (map[letter] > 1) {
        map[s[l]]--;
        l++;
      }
    } else {
      map[letter] = 1;

      // 此时才有可能刷新最大值
      ret = Math.max(ret, r - l + 1);
    }

    r++;
  }

  return ret;
};

// test

const m = {
  a: 2,
  b: 1,
  c: 1,
};

let s;
s = "abcabcbb";
s = "bbbbb";
// s = "pwwkew";
// s = "";

const ret = method(s);

console.log(ret);

function method(s) {
  const len = s.length;
  let left = 0;
  let right = 0;
  let ret = 0;
  const map = {};

  while (right < len) {
    const letter = s[right];
    if (letter in map) {
      map[letter]++;

      while (map[letter] > 1) {
        const ele = s[left];
        map[ele]--;
        left++;
      }
    } else {
      map[letter] = 1;
      ret = Math.max(ret, right - left + 1);
    }

    right++;
  }

  return ret;
}
