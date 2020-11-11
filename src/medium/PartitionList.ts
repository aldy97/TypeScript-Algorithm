// Space: O(1); Time: O(n)
function partitionList(head: ListNode | null, x: number): ListNode | null {
  // base case:
  if (!head) {
    return null;
  }
  // two lists: one for < x, the other for >= x
  let dummyLess = new ListNode(0);
  let dummyMore = new ListNode(0);

  // two pointers that remain at the tip of lists
  let less = dummyLess;
  let more = dummyMore;

  // iterates through given lists
  while (head) {
    if (head.val < x) {
      less.next = head;
      less = less.next;
    } else {
      more.next = head;
      more = more.next;
    }
    head = head.next;
  }

  // glue them together
  less.next = dummyMore.next;
  more.next = null;
  return dummyLess.next;
}
