import { ListNode } from "../medium/RemoveDuplicatesfromSortedListII";
function reorderList(head: ListNode | null): void {
  if (!head) {
    return;
  }

  let node: ListNode | null = head;
  let list: ListNode[] = [];

  while (node) {
    list.push(node);
    node = node.next;
  }

  let i = 0;
  let j = list.length - 1;

  while (i < j) {
    list[i].next = list[j];
    i++;
    if (i === j) {
      break;
    }
    list[j].next = list[i];
    j--;
  }
  list[i].next = null;
}
