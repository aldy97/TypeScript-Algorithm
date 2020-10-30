class Node2 {
  val: number;
  next: Node2 | null;
  random: Node2 | null;
  constructor(val?: number, next?: Node2, random?: Node2) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node2 | null): Node2 | null {
  if (!head) {
    return null;
  }
  let clone = new Map<Node2, Node2>();
  let n: Node2 | null = head;
  while (n) {
    clone.set(n, new Node2(n.val));
    n = n.next;
  }
  n = head;
  while (n) {
    (clone.get(n) as Node2).next = clone.get(n.next as Node2) || null;
    (clone.get(n) as Node2).random = clone.get(n.random as Node2) || null;
    n = n.next;
  }
  return clone.get(head) as Node2;
}
