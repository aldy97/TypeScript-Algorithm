export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyHead = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let curr = dummyHead;
  let carry = 0;
  while (p1 !== null || p2 !== null) {
    let x = p1 != null ? p1.val : 0;
    let y = p2 != null ? p2.val : 0;
    let sum = carry + x + y;
    carry = sum / 10 >= 1 ? 1 : 0;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
}
