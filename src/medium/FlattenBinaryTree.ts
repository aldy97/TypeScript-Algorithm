import { TreeNode } from "../easy/IsSameTree";
/** 1. flatten both left and right child
 *  2. make the right child become left child, stick the right child to the bottom of the left child
 *  Time: O(n), Space: O(1)
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }
  flatten(root.left);
  flatten(root.right);

  const left = root.left;
  const right = root.right;

  root.left = null;
  root.right = left;

  while (root.right) {
    root = root.right;
  }
  root.right = right;
}
