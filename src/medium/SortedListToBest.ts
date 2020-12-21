import { TreeNode } from "../easy/IsSameTree";

function findMiddleEle(head: ListNode): ListNode {
  let prev: ListNode | null = null;
  let slow: ListNode = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }
  if (prev) {
    prev.next = null;
  }
  return slow;
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) {
    return null;
  }

  const mid = findMiddleEle(head);
  let node = new TreeNode(mid.val);
  if (head === mid) {
    return node;
  }
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(mid.next);
  return node;
}
