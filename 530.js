// minimum absolute difference in BST

var getMinimumDifference = function(root) {
    let cache = -Infinity;
    let ret = Number.MAX_SAFE_INTEGER;
    
    function traverse(root) {
        // 递归出口
        if (!root) {
            return;
        }
    
        // 递归
        traverse(root.left);

        // 递归操作
        ret = Math.min(ret, root.val - cache);
        cache = root.val

        // 递归
        traverse(root.right);
    }
    
    traverse(root)

    return ret;
};