// 相同的树

/**
 * 这道题关键在于条件判断
 * 1. p === null && q === null 第一遍我只写对了这一个条件。
 * 之后写了很多冗余条件，比如 else if (p === null && q !== null)
 * 其实在 p === null && q === null 之后，一些条件被过滤，一些条件可以合并。
 * 需要细细品。
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false
    } else if (p.value !== q.value) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};