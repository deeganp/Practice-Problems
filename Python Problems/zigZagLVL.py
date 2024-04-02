from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def zigzagLevelOrder(root):
    if not root:
        return []  # Return empty list if root is None
    
    result = []  # Initialize result list
    queue = deque([(root, 0)])  # Initialize deque with root node and its level
    
    while queue:
        level_nodes = []  # Temporary list to store node values at the current level
        level_size = len(queue)  # Number of nodes at the current level
        
        for _ in range(level_size):
            node, level = queue.popleft()  # Dequeue node and its level
            
            # Append node value to level_nodes based on zigzag pattern
            if level % 2 == 0:
                level_nodes.append(node.val)  # Left to right for even levels
            else:
                level_nodes.insert(0, node.val)  # Right to left for odd levels
            
            # Enqueue left and right children with their levels
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))
        
        result.append(level_nodes)  # Append level_nodes to result
    
    return result
