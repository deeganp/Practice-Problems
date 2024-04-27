// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
// (i.e., from left to right, then right to left for the next level and alternate between).


function zigzagLevelOrder(root) {
    if (!root) return [];
    
    const result = [];
    let level = 0;
    
    function traverse(node, level) {
        if (!node) return;
        
        if (!result[level]) {
            result[level] = [];
        }
        
        if (level % 2 === 0) {
            result[level].push(node.val);  // Left to right
        } else {
            result[level].unshift(node.val);  // Right to left
        }
        
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    
    traverse(root, level);
    return result;
}
