function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let meet = null;

  while (fast) {
    // in this case, no cycle in the given linked list
    if (fast.next === null) {
      return null;
    }
    fast = fast.next.next;
    slow = slow.next as ListNode;
    if (fast === slow) {
      meet = fast;
      while (head !== meet) {
        head = head.next as ListNode;
        meet = meet.next as ListNode;
      }
      return head;
    }
  }

  return null;
}
