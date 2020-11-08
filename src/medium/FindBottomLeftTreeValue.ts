import { TreeNode } from '../easy/IsSameTree';

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }
  let lastRow: number[] = [];
  let queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    let currRow: number[] = [];
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const curr: TreeNode = queue.shift() as TreeNode;
      currRow.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      lastRow = currRow;
    }
  }
  return lastRow.shift() as number;
}
