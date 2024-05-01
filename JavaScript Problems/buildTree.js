const buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    const rootIndexInorder = inorder.indexOf(rootVal);
    
    const leftInorder = inorder.slice(0, rootIndexInorder);
    const rightInorder = inorder.slice(rootIndexInorder + 1);
    
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);
    
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    
    return root;
};