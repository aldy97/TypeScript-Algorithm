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

// Solution 1: level order traversal
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

// Solution 2: recursion
function connectTwoNodes(n1: Node3 | null, n2: Node3 | null): void {
  if (!n1 || !n2) {
    return;
  }
  n1.next = n2;
  connectTwoNodes(n1.left, n1.right);
  connectTwoNodes(n2.left, n2.right);
  connectTwoNodes(n1.right, n2.left);
}

function connect2(root: Node3 | null): Node3 | null {
  if (!root) {
    return null;
  }
  root.next = null;
  connectTwoNodes(root.left, root.right);
  return root;
}
