const root = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
        },
        right: {
            val: 3
        }
    },
    right: {
        val: 6
    }
}

let cache = Infinity;
let ret = Infinity;

function traverse(root) {
    if (!root) {
        return;
    }

    traverse(root.left);
    ret = Math.min(ret, Math.abs(root.val - cache));
    cache = root.val
    traverse(root.right);
}

traverse(root)