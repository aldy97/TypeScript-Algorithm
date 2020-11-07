import { TreeNode } from '../easy/IsSameTree';

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  let result: number[] = [];
  let queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    const n = queue.length;
    const curr: number[] = [];
    for (let i = 0; i < n; i++) {
      const node: TreeNode = queue.shift() as TreeNode;
      curr.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(Math.max(...curr));
  }
  return result;
}
