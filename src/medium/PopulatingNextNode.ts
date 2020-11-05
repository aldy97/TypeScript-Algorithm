class Node3 {
  val: number;
  left: Node3 | null;
  right: Node3 | null;
  next: Node3 | null;
  constructor(val?: number, left?: Node3, right?: Node3, next?: Node3) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: Node3 | null): Node3 | null {
  if (!root) {
    return null;
  }
  let queue = [root];
  while (queue.length !== 0) {
    const n = queue.length;
    let currLevel: Node3[] = [];
    for (let i = 0; i < n; i++) {
      const curr: Node3 = queue.shift() as Node3;
      currLevel.push(curr);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    for (let i = 0; i < currLevel.length - 1; i++) {
      currLevel[i].next = currLevel[i + 1];
    }
    currLevel[currLevel.length - 1].next = null;
  }
  return root;
}
