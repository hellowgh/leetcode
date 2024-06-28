function calculateHeight(index) {
  const m = 0.001;
  const b = 20.2;
  return m * index + b;
}

console.log(calculateHeight(18));
console.log(calculateHeight(1797));

// 18, 20.21,
// 1797, 21.997
