class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }
  // to guarantee the dummy node is not same as the original head.
  let dummy = new ListNode(0 == head.val ? 1 : 0);
  dummy.next = head;

  let pre = dummy;
  let cur = head;

  // the first node in the new unduplicated(result) list.
  let first = dummy;

  while (cur && cur.next) {
    // we found a unique node, we connect it at the tail of the unduplicated list, and update the first node.
    if (cur.val !== pre.val && cur.val !== cur.next.val) {
      first.next = cur;
      first = first.next;
    }
    pre = cur;
    cur = cur.next;
  }

  // the last node needs to be dealt with independently
  if (pre.val !== cur.val) {
    first.next = cur;
    first = first.next;
  }
  // the subsequent list is duplicate.
  first.next = null;

  return dummy.next;
}
