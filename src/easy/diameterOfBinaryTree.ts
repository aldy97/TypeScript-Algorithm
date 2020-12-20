import { TreeNode } from "./IsSameTree";
// ans is initiated to be 1 is because we need to handle the case in which the tree is just the root itself
// Space and Time: O(n)
function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 1;

  function getDepth(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const left = getDepth(root.left);
    const right = getDepth(root.right);
    ans = Math.max(1 + left + right, ans);
    return Math.max(left, right) + 1;
  }

  getDepth(root);
  return ans - 1;
}
