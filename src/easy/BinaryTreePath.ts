import { TreeNode } from './IsSameTree';
function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }
  let result: string[] = [];

  function backtrack(root: TreeNode, curr: string) {
    // reaches leaf node:
    if (!root.left && !root.right) {
      curr = curr + root.val.toString();
      result.push(curr);
      return;
    } else {
      curr = curr + root.val.toString() + '->';
      if (root.left) {
        backtrack(root.left, curr);
      }
      if (root.right) {
        backtrack(root.right, curr);
      }
    }
  }

  backtrack(root, '');
  return result;
}
