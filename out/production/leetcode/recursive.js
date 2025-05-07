function count(num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    if (num === 2) return 2;
    if (num === 3) return 4;

    return count(num - 1) + count(num - 2) + count(num - 3);
}

console.log(count(5));