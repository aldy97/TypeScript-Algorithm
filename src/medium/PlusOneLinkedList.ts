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

function plusOne(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let notNine: ListNode | null = dummy;

  while (head) {
    if (head.val !== 9) {
      notNine = head;
    }
    head = head.next;
  }

  notNine.val += 1;
  notNine = notNine.next;

  while (notNine) {
    notNine.val = 0;
    notNine = notNine.next;
  }

  // only returns dummy when head is 9*
  return dummy.val === 1 ? dummy : dummy.next;
}
