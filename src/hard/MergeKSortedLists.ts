import { ListNode } from "../medium/AddTwoNumbers";

// Space: O(nk), where n is number of ListNodes, k is number of lists
// Time: O(n)
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let dummy = new ListNode(0);

  function helper(curr: ListNode, currLists: Array<ListNode | null>): ListNode | null {
    if (currLists.every((list) => list === null)) {
      return dummy.next;
    }

    let min = Infinity;
    let index = 0;

    for (let i = 0; i < currLists.length; i++) {
      const list = currLists[i];
      if (list && list.val < min) {
        min = list.val;
        index = i;
      }
    }
    if (currLists[index] !== null) {
      currLists[index] = (currLists[index] as ListNode).next;
    }

    curr.next = new ListNode(min);
    curr = curr.next;
    return helper(curr, currLists);
  }

  return helper(dummy, lists);
}
