import { ListNode } from './medium/AddTwoNumbers';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

const l1 = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);
console.log(deleteDuplicates(l1));
