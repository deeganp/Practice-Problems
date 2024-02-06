// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    let ptrA = headA;
    let ptrB = headB;

    while (ptrA !== ptrB) {
        ptrA = ptrA ? ptrA.next : headB; // Move ptrA to the head of listB if it reaches the end
        ptrB = ptrB ? ptrB.next : headA; // Move ptrB to the head of listA if it reaches the end
    }

    return ptrA; // Return intersection node or null
}