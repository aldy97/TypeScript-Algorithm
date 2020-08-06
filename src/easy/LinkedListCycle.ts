/**
 * @param {ListNode} head
 * @return {boolean}
 * 设置快慢指针(慢指针每次移动一个node，快指针每次移动两个node)，判断两者是否会相遇
 */
function hasCycle(head: any): boolean {
  let slow = head;
  let fast = head;
  //只有当cycle不存在的时候while循环才会terminate
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
