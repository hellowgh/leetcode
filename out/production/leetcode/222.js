// count complete tree nodes

var countNodes = function(root) {
    if (root === null) {
        return;
    }

    return (countNodes(root.left) + countNodes(root.right)) + 1
};