import { ListNode } from '../medium/AddTwoNumbers';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = head;
  let length = 0;
  let first = head;
  while (first != null) {
    length++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  while (length > 0) {
    length--;
    if (first && first.next) {
      first = first.next;
    }
  }
  if (first && first.next && first.next.next) {
    first.next = first.next.next;
  }
  return dummy.next;
}
