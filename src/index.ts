class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const convertToNumber = (n: number[]): number => {
  let result: string[] = [];
  n.map((number) => result.push(number.toString()));
  return parseInt(result.join(''), 10);
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
  while (l2?.val !== undefined) {
    num2.push(l2.val);
    l2 = l2.next;
  }
  const resultNumber: string = (
    convertToNumber(num1) + convertToNumber(num2)
  ).toString();
  let resultUnprocessed: string[] = [];
  for (let i = 0; i < resultNumber.length; i++) {
    resultUnprocessed.push(resultNumber[i]);
  }

  const reultInNumbers: number[] = resultUnprocessed
    .reverse()
    .map((string) => parseInt(string, 10));
  console.log(reultInNumbers);
  result.val = reultInNumbers[0];
  for (let i = 0; i < reultInNumbers.length; i++) {
    while (result.next === undefined) {}
  }
  return result;
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
