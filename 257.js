var binaryTreePaths = function(root) {
    const ret = [];

    const backtrack = (root, path = []) => {
        if(!root) {
            return
        }

        path.push(root.val);

        if (!root.left && !root.right) {
            ret.push(path.join('->'))
        } else {
            backtrack(root.left, [...path]);
            backtrack(root.right, [...path]);
        }
    }

    backtrack(root)

    return ret;
};