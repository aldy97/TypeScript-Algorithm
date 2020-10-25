import { TreeNode } from '../easy/IsSameTree';

//one should keep both upper and lower limits for each node while traversing the tree, and compare the node value not with children values but with these limits.
function isValidBST(root: TreeNode | null): boolean {
  function helper(
    root: TreeNode | null,
    min: number | null,
    max: number | null
  ): boolean {
    if (!root) {
      return true;
    }
    if ((min && root.val <= min) || (max && root.val >= max)) {
      return false;
    }
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }
  return helper(root, null, null);
}
