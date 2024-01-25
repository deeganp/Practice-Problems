class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

// Example usage:
// Assuming you have the linked list: 1 -> 2 -> 3 -> 4 -> 5

// Build the linked list
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// Reverse the linked list
const reversedHead = reverseList(head);