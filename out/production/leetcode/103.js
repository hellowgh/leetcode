// binary tree zigzag order traversal

var zigzagLevelOrder = function(root) {
    if (root === null) return [];

    const ret = [];
    function BFS(root, deepth = 0) {
        // exit
        if (root === null) return;

        // operation
        if (!ret[deepth]) {
            ret[deepth] = [];
        }
        if (root) {
            if (deepth % 2 === 0) {
                ret[deepth].push(root.val);
            } else {
                ret[deepth].unshift(root.val);
            }
        }
        deepth++;

        // recursive
        BFS(root.left, deepth);
        BFS(root.right, deepth);

        // backtracking
        deepth -= 1;
    }

    BFS(root)

    return ret;
}