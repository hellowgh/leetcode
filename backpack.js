const list = [
  {
    name: "water",
    w: 3,
    val: 10,
  },
  {
    name: "book",
    w: 1,
    val: 3,
  },
  {
    name: "food",
    w: 2,
    val: 9,
  },
  {
    name: "jack",
    w: 2,
    val: 5,
  },
  {
    name: "camera",
    w: 1,
    val: 6,
  },
];

const limit = 6;

function solution(list, limit) {
  if (list.length === 0) {
    return 0;
  }

  const table = Array.from({ length: list.length }, () =>
    Array.from({ length: limit }, () => 0)
  );

  for (let i = 0; i < list.length; i++) {
    const cur = list[i];
    for (let j = 0; j < limit; j++) {
      let pick = 0;
      const tableI = table[i - 1] ?? Array.from({ length: limit }, () => 0);
      if (j >= cur.w) {
        pick = tableI[j - cur.w] + cur.val;
      }
      const pass = tableI[j];
      table[i][j] = Math.max(pick, pass);
    }
  }

  console.log(table);

  return table[list.length - 1][limit - 1];
}

// const ret = solution(list, limit);
// console.log(ret);

// 理解dp[i, j]的意义很重要

const list2 = [
  {
    w: 0,
    val: 0,
  },
  {
    name: "water",
    w: 3,
    val: 10,
  },
  {
    name: "book",
    w: 1,
    val: 3,
  },
  {
    name: "food",
    w: 2,
    val: 9,
  },
  {
    name: "jack",
    w: 2,
    val: 5,
  },
  {
    name: "camera",
    w: 1,
    val: 6,
  },
];

function s2(list, limit) {
  if (list.length === 0 || limit <= 0) return 0;

  function dp(i, j) {
    if (i <= 0 || j <= 0) return 0;

    let pick = 0;
    if (j >= list[i].w) {
      pick = list[i].val + dp(i - 1, j - list[i].w);
    }
    const pass = dp(i - 1, j);

    return Math.max(pick, pass);
  }

  return dp(list.length - 1, limit);
}

console.log(s2(list, limit));
