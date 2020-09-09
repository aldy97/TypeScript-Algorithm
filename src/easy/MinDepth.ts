import { TreeNode } from './IsSameTree';

function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  return left === 0 || right === 0
    ? left + right + 1
    : Math.min(left, right) + 1;
}
