from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        
        def is_mirror(t1: Optional[TreeNode], t2: Optional[TreeNode]) -> bool:
            if not t1 and not t2:
                return True
            if not t1 or not t2:
                return False
            return (t1.val == t2.val) and is_mirror(t1.right, t2.left) and is_mirror(t1.left, t2.right)
        
        return is_mirror(root.left, root.right) 