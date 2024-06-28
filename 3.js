var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 0;
  const len = s.length;
  let ret = 1;
  const map = {};

  // 完全模拟人的行为
  while (r < len - 1) {
    const letter = s[r];
    if (map[letter]) {
      map[letter]++;

      while (map[letter] > 1) {
        map[s[l]]--;
        l++;
      }
    } else {
      map[letter] = 1;
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
s = "pwwkew";
s = "";

const ret = lengthOfLongestSubstring(s);

console.log(ret);
