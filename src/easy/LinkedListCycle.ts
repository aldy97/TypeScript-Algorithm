// Done in daily chanllenge on Feb 03, 2021
// Insights: if there is cycle, the slow will encouter the fast
// Time: O(n)
// Space: O(1)
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let slow: any = head;
  let fast = head.next;
  while (fast) {
    if (slow.val === fast.val) {
      return true;
    }
    slow = slow.next;
    fast = fast.next;
    if (fast && fast.next) {
      fast = fast.next;
    }
  }

  return false;
}
