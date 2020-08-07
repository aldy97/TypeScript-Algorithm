import { ListNode } from '../medium/AddTwoNumbers';

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null;
  let dummy = new ListNode(0, head);
  let curr = dummy;
  while (curr && curr.next) {
    if (curr.next.val === val && curr.next.next) {
      curr.next = curr.next.next;
    } else if (curr.next.val === val && !curr.next.next) {
      curr.next = null;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
}
