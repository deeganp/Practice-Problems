// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
// (i.e., from left to right, then right to left for the next level and alternate between).


function zigzagLevelOrder(root) {
    if (!root) return []; // Return empty array if root is null

    const result = []; // Initialize result array
    let level = 0; // Initialize level counter

    // Create a queue and enqueue the root node along with its level
    const queue = [[root, level]];

    while (queue.length > 0) {
        const levelNodes = []; // Temporary array to store nodes at the current level

        // Process nodes at the current level
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const [node, currentLevel] = queue.shift(); // Dequeue node and its level

            // Push node value to levelNodes based on the zigzag pattern
            if (level % 2 === 0) {
                levelNodes.push(node.val); // Left to right for even levels
            } else {
                levelNodes.unshift(node.val); // Right to left for odd levels
            }

            // Enqueue left and right children of the current node with their respective levels
            if (node.left) queue.push([node.left, currentLevel + 1]);
            if (node.right) queue.push([node.right, currentLevel + 1]);
        }

        result.push(levelNodes); // Push levelNodes to result array
        level++; // Increment level counter for the next level
    }

    return result;
}
