import { ListNode } from "./AddTwoNumbers";
// insights: if there is no intersection, both pointers will eventually both be null and return
// if there is intersection, they will eventually meet at the same node, and it is exactly the intersection
// Time: O(m + n), where m is the length of headA, and n is the length of headB
// Space: O(1)
function getIntersectionNode(
  headA: ListNode,
  headB: ListNode
): ListNode | null {
  if (!headA || !headB) return null;
  let curA = headA;
  let curB = headB;

  // if there is a intersection and they have different list length, when the iteration of the longer one is done,
  // that pointer should be (m - n) steps behind the other.
  while (curA !== curB && curA.next && curB.next) {
    curA = curA == null ? headB : curA.next;
    curB = curB == null ? headA : curB.next;
  }

  return curA;
}
