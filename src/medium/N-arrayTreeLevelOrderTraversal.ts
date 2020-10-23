class Node1 {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: Node | null): number[][] {
  if (!root) {
    return [];
  }
  let results: number[][] = [];
  let queue: Node[] = [root];
  while (queue.length !== 0) {
    const size = queue.length;
    const result: number[] = [];
    for (let i = 0; i < size; i++) {
      const curr: Node1 = queue.shift() as any;
      result.push(curr.val);
      if (curr.children) {
        queue.push(...curr.children);
      }
    }
    results.push(result);
  }
  return results;
}
