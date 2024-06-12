class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def getIntersectionNode(headA, headB):
    if not headA or not headB:
        return None

    ptrA = headA
    ptrB = headB

    while ptrA != ptrB:
        # Move to the next node in the list, or switch to the other list's head
        ptrA = ptrA.next if ptrA else headB
        ptrB = ptrB.next if ptrB else headA

    return ptrA  # This will be the intersection node or None
