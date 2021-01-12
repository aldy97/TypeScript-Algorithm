export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Time and Space: O(max(m, n)), where m and n are length of l1 and l2 respectively
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode();
  let p1 = l1;
  let p2 = l2;
  let curr = dummy;
  let carry = 0;

  while (p1 || p2) {
    const x = p1 ? p1.val : 0;
    const y = p2 ? p2.val : 0;
    const sum = x + y + carry;
    carry = sum >= 10 ? 1 : 0;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
  }

  // check carry before finish
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
}
