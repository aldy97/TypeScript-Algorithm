import { TreeNode } from "../easy/IsSameTree";
function maxPathSum(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let res = -Infinity;
  function maxGain(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }
    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);
    const pathSum = node.val + leftGain + rightGain;
    res = Math.max(pathSum, res);
    return node.val + Math.max(leftGain, rightGain);
  }
  maxGain(root);
  return res;
}
