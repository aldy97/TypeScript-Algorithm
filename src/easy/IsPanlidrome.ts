import { ListNode } from '../medium/AddTwoNumbers';

//helper1
function arraysEqual(a: number[], b: number[]) {
  if (a === null && b === null) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

//helper2
function getReversedList(list: number[]): number[] {
  let res = [];
  for (let i = list.length - 1; i >= 0; i--) {
    res.push(list[i]);
  }
  return res;
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return true;
  let list: number[] = [];
  let dummy = new ListNode(0, head);
  let curr = dummy.next;
  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }
  return arraysEqual(list, getReversedList(list));
}
