// 快乐数

function isHappy(n) {
  const map = {};
  let ret = 0;
  let str = String(n);

  while (ret !== 1) {
    for (let i = 0; i < str.length; i++) {
      const num = Number(str[i]);
      ret += num * num;
    }

    if (ret === 1) {
      return true;
    }

    if (str in map) {
      return false;
    }

    map[str] = ret;
    str = String(ret);
    ret = 0;
  }

  return false;
}

let n;
n = 19;
n = 1;

const ret = isHappy(n);
console.log(ret);
