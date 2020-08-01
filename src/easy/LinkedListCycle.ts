/**
 * @param {ListNode} head
 * @return {boolean}
 * 设置快慢指针，判断两者是否会相遇
 */
function hasCycle(head: any): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
