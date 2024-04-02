# Given the root of a binary tree, return the inorder traversal of its nodes' values. 



class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversalRecursive(root):
    result = []
    
    def traverse(node):
        if not node:
            return
        
        traverse(node.left)   # Traverse left subtree
        result.append(node.val)  # Visit current node
        traverse(node.right)  # Traverse right subtree
    
    traverse(root)
    return result
