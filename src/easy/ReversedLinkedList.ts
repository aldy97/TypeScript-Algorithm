import { ListNode } from '../medium/AddTwoNumbers';
//using iteration
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let curr = head;
  let dummy = new ListNode(head.val, null);
  while (curr && curr.next) {
    curr = curr.next;
    dummy = new ListNode(curr.val, dummy);
  }
  return dummy;
}

//using recursion
function reversedListRecursion(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}
