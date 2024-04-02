// Given the root of a binary tree, return the inorder traversal of its nodes' values. in javascript


function inorderTraversalRecursive(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        traverse(node.left); // Traverse left subtree
        result.push(node.val); // Visit current node
        traverse(node.right); // Traverse right subtree
    }
    
    traverse(root);
    return result;
}