export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const convertToNumber = (n: number[]): number => {
  let result = 0;
  return result;
};

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode = new ListNode();
  const num1: number[] = [];
  const num2: number[] = [];
  //ListNode -> number[]
  while (l1?.val !== undefined) {
    num1.push(l1.val);
    l1 = l1.next;
  }
  console.log('out of first while loop');
  while (l2?.val !== undefined) {
    num2.push(l2.val);
    l2 = l2.next;
  }
  console.log('out of first while loop');
  return result;
}

export default addTwoNumbers;
