// binary tree inorder traversal

var inorderTraversal = function(root) {
    const ret = [];

        const stack = [];
        let cur = root;

        while(stack.length || cur) {
            while(cur) {
                stack.push(cur);
                cur = root.left;
            }

            cur = stack.pop();
            ret.push(cur.val);
            cur = cur.right;
        }

    return ret;
};