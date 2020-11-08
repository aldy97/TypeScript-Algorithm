/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Time: O(n), Space: O(n)
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let n = head.next;
  head.next = swapPairs(head.next.next);
  n.next = head;
  return n;
}
