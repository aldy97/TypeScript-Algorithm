import { TreeNode } from '../easy/IsSameTree';
function isValidBST(root: TreeNode | null): boolean {
  function helper(
    root: TreeNode | null,
    min: number | null,
    max: number | null
  ): boolean {
    if (!root) {
      return true;
    }
    if (
      (min !== null && root.val <= min) ||
      (max !== null && root.val >= max)
    ) {
      return false;
    }
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }
  return helper(root, null, null);
}
