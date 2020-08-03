import { ListNode } from './AddTwoNumbers';
function getIntersectionNode(
  headA: ListNode,
  headB: ListNode
): ListNode | null {
  if (!headA || !headB) return null;
  var curA = headA;
  var curB = headB;
  while (curA !== curB && curA.next && curB.next) {
    curA = curA == null ? headB : curA.next;
    curB = curB == null ? headA : curB.next;
  }
  return curA;
}
