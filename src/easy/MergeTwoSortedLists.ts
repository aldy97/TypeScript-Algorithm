import { ListNode } from "../medium/AddTwoNumbers";

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) return l1 || l2;
  const dummy = new ListNode(0);
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) curr.next = l1;
  if (l2) curr.next = l2;
  return dummy.next;
}

// Second attempt in daily chanllenge using iteration
// Time: O(n), where n is total number of nodes in two given linked lists
// Space: O(1)
function mergeTwoLists2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  let pt = dummy;
  let p1 = l1;
  let p2 = l2;

  while (p1 !== null || p2 !== null) {
    if (p1 && p2 && p1.val < p2.val) {
      pt.next = new ListNode(p1.val);
      p1 = p1.next;
    } else if (p1 && !p2) {
      pt.next = new ListNode(p1.val);
      p1 = p1.next;
    } else if (p1 && p2 && p1.val >= p2.val) {
      pt.next = new ListNode(p2.val);
      p2 = p2.next;
    } else if (!p1 && p2) {
      pt.next = new ListNode(p2.val);
      p2 = p2.next;
    }
    pt = pt.next as ListNode;
  }

  return dummy.next;
}

// Recursion
// Time and Space: O(n), where n is total number of nodes in two given linked lists
function mergeTwoLists3(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists3(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
