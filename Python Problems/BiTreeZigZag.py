#  Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
#  (i.e., from left to right, then right to left for the next level and alternate between).


def zigzagLevelOrder(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    level = 0
    
    while queue:
        level_nodes = []
        size = len(queue)
        
        for _ in range(size):
            node = queue.pop(0)
            if level % 2 == 0:
                level_nodes.append(node.val)  # Left to right
            else:
                level_nodes.insert(0, node.val)  # Right to left
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level_nodes)
        level += 1
    
    return result
