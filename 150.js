const isSubsequence = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  let sIndex = 0;
  let tIndex = 0;

  if (sLen > tLen) {
    return false;
  }

  while (sIndex < sLen && tIndex < tLen) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === sLen;
};

// test
let s, t;

(s = "abc"), (t = "ahbgdc");
(s = "axc"), (t = "ahbgdc");
(s = ""), (t = "ahbgdc");

const ret = isSubsequence(s, t);

console.log(ret);
