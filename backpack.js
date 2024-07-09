const list = [
  {
    name: "xx",
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

const limit = 6;

function dp(i, j) {
  let table = Array.from({ length: list.length + 1 }, () =>
    Array.from({ length: limit + 1 }, () => 0)
  );

  console.log(table);

  for (let j = 1; j < list.length; j++) {
    for (let i = 1; i <= limit + 1; i++) {
      const pick = list[j].val + table[(0, 0)];
      const pass = table[j - 1];
    }
  }
}

dp(1, 2);


function solution(list) {
  if (list.length === 0) {
    return 0;
  }

  const 
}