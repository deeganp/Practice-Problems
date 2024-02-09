/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSymmetric(root) {
    if (!root) {
        return true; // An empty tree is symmetric
    }

    // Helper function to check if two subtrees are symmetric
    function isMirror(left, right) {
        if (!left && !right) {
            return true; // Both subtrees are empty, they are symmetric
        }
        if (!left || !right || left.val !== right.val) {
            return false; // One subtree is empty or their values are different, not symmetric
        }

        // Check the symmetry of the left and right subtrees
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    // Call the helper function with the root's left and right subtrees
    return isMirror(root.left, root.right);
}