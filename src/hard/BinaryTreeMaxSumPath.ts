import { TreeNode } from "../easy/IsSameTree";
//Time: O(n), Space: O(H)
function maxPathSum(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let res = -Infinity;
  // recursion combined with global var update
  function maxGain(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }
    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);
    // line 16 and 17 is for determing whether the curr node is the root node of the path
    const pathSum = node.val + leftGain + rightGain;
    res = Math.max(pathSum, res);
    // If we choose both, then we would end up not going up to the root of the sum.
    // We are only allowed to add for both leftGain and rightGain when we at the root node of the path
    return node.val + Math.max(leftGain, rightGain);
  }
  maxGain(root);
  return res;
}
