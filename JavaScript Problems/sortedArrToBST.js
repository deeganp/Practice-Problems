/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    if (!nums.length) {
        return null; // Empty array results in an empty tree
    }

    // Find the middle index of the array
    const midIndex = Math.floor(nums.length / 2);

    // Create a new tree node with the middle element as the root
    const root = new TreeNode(nums[midIndex]);

    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));

    return root;
}