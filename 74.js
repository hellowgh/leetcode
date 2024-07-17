// search a 2D matrix

var searchMatrix = function(matrix, target) {
    const h = matrix.length;
    if(h === 0) return false;
    const w = matrix[0].length;
    let left = 0;
    let right = h * w - 1;

    while(left <= right) {
        const mid = Math.floor((right - left) / 2 + left);
        const count = Math.floor(mid / w);
        const index = mid % w;
        const midNum = matrix[count][index];
        if (midNum === target) {
            return true;
        } else if (midNum > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};

let matrix, target;
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
const ret = searchMatrix(matrix, target);
console.log(ret);