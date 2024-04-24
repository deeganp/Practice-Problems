// Given the root of a binary tree, return the inorder traversal of its nodes' values.


function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (node !== null) {
            traverse(node.left);  // Recursively traverse left subtree
            result.push(node.val);  // Visit current node
            traverse(node.right);  // Recursively traverse right subtree
        }
    }
    
    traverse(root);  // Start traversal from the root
    return result;
}