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

// Time: O(n), Space: O(1)
// Iterative: We also need to assign the prevNode's next to the head of the swapped pair.
// This step would ensure the currently swapped pair is linked correctly to the end of the previously swapped list.
function swapPairs2(head: ListNode | null): ListNode | null {
  let dummy = new ListNode();
  dummy.next = head;
  let point = dummy;

  while (point.next && point.next.next) {
    let swap1 = point.next;
    let swap2 = point.next.next;
    // swap
    point.next = swap2;
    swap1.next = swap2.next;
    swap2.next = swap1;

    point = swap1;
    head = swap1.next;
  }

  return dummy.next;
}
