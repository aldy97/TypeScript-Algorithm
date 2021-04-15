import { ListNode } from "../medium/AddTwoNumbers";

// Insights: all nodes with val less than x puts in left, else in right
// Time: O(n)
// Space: O(1), left and right are built just by composition of given head
function partition(head: ListNode | null, x: number): ListNode | null {
  let left = new ListNode(0);
  let pt1 = left;
  let right = new ListNode(0);
  let pt2 = right;

  while (head !== null) {
    if (head.val < x) {
      pt1.next = head;
      pt1 = pt1.next;
    } else {
      pt2.next = head;
      pt2 = pt2.next;
    }
    head = head.next;
  }

  pt2.next = null;
  pt1.next = right.next;
  return left.next;
}
