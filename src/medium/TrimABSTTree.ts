import { TreeNode } from "../easy/IsSameTree";

// Inights: when a node's val is not valid, then one of its chilren is not valid either
// Time: O(n)
// Space: O(n), due to recursiveness
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  // helper func:
  function isValid(val: number): boolean {
    return val >= low && val <= high;
  }

  // base case:
  if (root === null) return null;

  if (!isValid(root.val)) {
    if (root.val < low) {
      return trimBST(root.right, low, high);
    } else {
      return trimBST(root.left, low, high);
    }
  } else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  }

  return root;
}
