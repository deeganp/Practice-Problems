#  Given the root of a binary tree, return the inorder traversal of its nodes' values.


def inorderTraversal(root):
    result = []
    
    def traverse(node):
        if node:
            traverse(node.left)  # Recursively traverse left subtree
            result.append(node.val)  # Visit current node
            traverse(node.right)  # Recursively traverse right subtree
    
    traverse(root)  # Start traversal from the root
    return result
