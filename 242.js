// valid anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  function helper(str) {
    const map = {};
    for (let i = 0; i < str.length; i++) {
      const k = str[i];
      if (k in map) {
        map[k]++;
      } else {
        map[k] = 1;
      }
    }

    return map;
  }

  const m1 = helper(s);
  const m2 = helper(t);

  const arr = Object.keys(m1);
  for (let i = 0; i < arr.length; i++) {
    const k = arr[i];
    if (m1[k] !== m2[k]) {
      return false;
    }
  }

  return true;
};

let s, t;
(s = "rat"), (t = "car");

const ret = isAnagram(s, t);
console.log(ret);

const ch1 = "a".charCodeAt(0);
console.log("a");
