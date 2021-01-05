export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Iteration: two pointers
// Time: O(n)
// Space: O(1)
function deleteDuplicates(head: ListNode | null): ListNode | null {
  // base case:
  if (!head) {
    return null;
  }

  let dummy = new ListNode(0, head);
  let pre = dummy;
  let curr: ListNode | null = head;
  while (curr && curr.next) {
    // checks whether curr has duplicates:
    let equal: boolean = false;
    while (curr.next && curr.val === curr.next.val) {
      equal = true;
      curr = curr.next;
    }
    // skip all duplicates
    if (equal) {
      pre.next = curr.next;
    } else {
      pre = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
}

// Recursion
// Time: O(n)
// Space: O(1n)
function deleteDuplicates2(head: ListNode | null): ListNode | null {
  // base case:
  if (!head) {
    return null;
  }

  if (head.next && head.val === head.next.val) {
    while (head.next && head.val === head.next.val) {
      head = head.next;
    }
    return deleteDuplicates2(head.next);
  } else {
    head.next = deleteDuplicates2(head.next);
  }

  return head;
}
