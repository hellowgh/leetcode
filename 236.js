// lowest common ancestor of a binary tree

function getAncestor(a1, a2) {
    for (let i = Math.min(a1.length, a2.length); i >= 0; i--) {
        if (a1[i] === a2[i]) {
            return a1[i]
        }
    }
}

var lowestCommonAncestor = function(root, p, q) {
    const path = []
    let a1;
    let a2;

    function dfs(root, p, q) {
        // exit
        if (root === null) {
            return;
        }

        // operation
        path.push(root);
        if (root.val === q || root.val === p) {
            if (!a1) {
                a1 = JSON.parse(JSON.stringify(path));
            } else {
                a2 = JSON.parse(JSON.stringify(path));
            }
        }

        // recursive
        dfs(root.left)
        dfs(root.right)

        // backtracking
        path.pop();
    }

    dfs(root, p, q);

    return getAncestor(a1, a2);
};