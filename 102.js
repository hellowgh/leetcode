var levelOrder = function(root) {
    if (root === null) return [];

    let queue = [root];
    let cache = [];
    const ret = [];
    let temp = [];

    while(queue.length) {
        const node = queue.shift();
        if (node) {
            temp.push(node.val);
            cache.push(node.left, node.right);    
        }

        if (queue.length === 0) {
            if (temp.length) {
                ret.push(temp);
            }
            queue = cache;
            cache = [];
            temp = [];
        }
    }

    return ret;
};

// 方法2
function s2(root) {
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
            ret[deepth].push(root.val);
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