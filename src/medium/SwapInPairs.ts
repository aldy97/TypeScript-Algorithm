class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Time: O(n), Space: O(n)
// Recursion
function swapPairs(head: ListNode | null): ListNode | null {
  // If the list has no node or has only one node left.
  if (!head || !head.next) {
    return null;
  }

  // Nodes to be swapped
  let first = head;
  let second = head.next;

  // Swapping
  first.next = swapPairs(second.next);
  second.next = first;

  return second;
}
