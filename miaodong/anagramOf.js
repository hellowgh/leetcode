let count = 0;
function anagramOf(str, memo = {}) {
  if (memo[str]) return memo[str];
  if (str.length === 1) return [str];

  const collection = [];

  // 操作的是这个函数的返回结果(假装有结果)
  const subAnagrams = anagramOf(str.slice(1), memo);

  // loop
  subAnagrams.forEach((subAna) => {
    // 这里一开始没有考虑最后一个位置
    for (let i = 0; i <= subAna.length; i++) {
      count++;
      const newAna = subAna.slice(0, i) + str[0] + subAna.slice(i);
      collection.push(newAna);
    }
  });

  // 这里返回结果
  memo[str] = collection;
  return collection;
}

let str;
str = "abcdfdsfsf";

console.time();
const ret = anagramOf(str);
console.timeEnd();
