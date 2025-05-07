// triangle

var minimumTotal = function(triangle) {
    const h = triangle.length;
    if (h === 0) return 0;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const pre = triangle[i - 1] ?? [];
            const option1 = pre[j - 1] ?? pre[j] ?? 0;
            const option2 = pre[j] ?? pre[j - 1] ?? 0;
            triangle[i][j] = Math.min(option1, option2) + triangle[i][j];
        }
    }

    return Math.min(...triangle[h - 1]);
};

let triangle;
triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
triangle = [[-10]]
const ret = minimumTotal(triangle);
console.log(ret);