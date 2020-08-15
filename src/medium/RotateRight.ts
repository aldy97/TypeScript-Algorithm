import { ListNode } from './AddTwoNumbers';
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  let result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  while (k > 0) {
    result.unshift(result.pop() as number);
    k--;
  }
  let res = new ListNode();
  let curr = res;
  for (let i = 0; i < result.length; i++) {
    curr.next = new ListNode(result[i]);
    curr = curr.next;
  }
  return res.next;
}
