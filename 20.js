var isValid = function (s) {
  const stack = [];
  const list = [...s];

  const left = ["(", "{", "["];

  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  while (list.length) {
    const ele = list.shift();

    if (left.includes(ele)) {
      stack.push(ele);
    } else {
      const temp = stack[stack.length - 1];
      const match = map[ele];
      if (temp === match) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// test

let s;
s = "()";
s = "()[]{}";
// s = "(]";
// s = "(){}}{";
// s = "()";

const ret = isValid(s);
console.log(ret);
