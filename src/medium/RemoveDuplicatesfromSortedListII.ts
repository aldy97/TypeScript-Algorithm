class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let dummy = new ListNode(0, head);
  let pre = dummy;
  let curr: ListNode | null = head;
  while (curr && curr.next) {
    let equal: boolean = false;
    while (curr.next && curr.val === curr.next.val) {
      equal = true;
      curr = curr.next;
    }
    if (equal) {
      pre.next = curr.next;
    } else {
      pre = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
}
