import { ListNode } from "../medium/AddTwoNumbers";
// Insights: second node is n nodes aways from first
// Time: O(n), where n is number of nodes
// Space: O(1)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first: ListNode | null = dummy;
  let second: ListNode | null = dummy;

  for (let i = 1; i <= n + 1; i++) {
    first = first?.next || null;
  }

  while (first != null) {
    first = first.next;
    second = (second as ListNode).next;
  }

  (second as ListNode).next = second?.next?.next || null;
  return dummy.next;
}
