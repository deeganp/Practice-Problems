class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def is_palindrome(head):
    # Helper function to reverse a linked list
    def reverse_linked_list(node):
        prev = None
        while node:
            next_node = node.next
            node.next = prev
            prev = node
            node = next_node
        return prev

    # Find the length of the linked list and store nodes in a list
    length = 0
    node = head
    nodes = []
    while node:
        nodes.append(node)
        node = node.next
        length += 1

    # Initialize pointers for comparison
    left, right = head, reverse_linked_list(nodes[length // 2])

    # Compare elements until one of the pointers reaches the end
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next

    return True
