import { TreeNode } from '../easy/IsSameTree';
function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root || k === 0) {
    return -1;
  }
  let result: number[] = [];
  let queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    const curr = queue.shift() as TreeNode;
    const max = Math.max(...result);
    if (result.length < k) {
      result.push(curr.val);
    } else if (curr.val < max) {
      result[result.indexOf(max)] = curr.val;
    }
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return Math.max(...result);
}
