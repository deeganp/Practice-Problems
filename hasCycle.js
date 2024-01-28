function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
* @param {ListNode} head
* @return {boolean}
*/
function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle in an empty list or a list with a single node
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; // If the fast pointer reaches the end, there is no cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true; // If the pointers meet, there is a cycle
}