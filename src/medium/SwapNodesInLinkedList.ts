import { ListNode } from "./AddTwoNumbers";

// Insights: one-pass solution, kth from the back can be spotted by starting by k - 1 late
// Time: O(n)
// Space: O(1), only front, end, curr and count are tracked
function swapNodesOnePass(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  let front = head,
    end = head,
    curr = head;
  let count = k;

  while (count > 1) {
    front = front.next as ListNode;
    curr = curr.next as ListNode;
    count--;
  }

  while (curr && curr.next) {
    end = end.next as ListNode;
    curr = curr.next;
  }

  const temp = front.val;
  front.val = end.val;
  end.val = temp;

  return head;
}

// Inghts: two-pass solution, iterate through the linked list and then build an arr, swap values in the array. Rebuild the linked list.
// Time: O(n)
// Space: O(n) for storing the arr
function swapNodesTwoPass(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  const arr: number[] = [];
  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }

  const p1 = k - 1;
  const p2 = arr.length - k;
  const temp = arr[p1];
  arr[p1] = arr[p2];
  arr[p2] = temp;

  const res = new ListNode(0);
  let ptr = res;
  for (const n of arr) {
    ptr.next = new ListNode(n);
    ptr = ptr.next;
  }

  return res.next;
}
