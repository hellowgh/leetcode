// ransom note

const countLetter = function (str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter in map) {
      map[letter]++;
    } else {
      map[letter] = 1;
    }
  }
  return map;
};

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const map1 = countLetter(ransomNote);
  const map2 = countLetter(magazine);

  for (let k in map1) {
    if (!map2[k] || map1[k] > map2[k]) {
      return false;
    }
  }

  return true;
};
