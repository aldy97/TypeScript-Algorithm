import { TreeNode } from "../easy/IsSameTree";

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

function isValidBST2(root: TreeNode | null): boolean {
  function checkIsValid(
    root: TreeNode | null,
    lower: number | null,
    upper: number | null
  ): boolean {
    if (!root) {
      return true;
    }
    // caution: lower? returns false when lower = 0
    const newL = lower === null ? -Infinity : lower;
    const newU = upper === null ? Infinity : upper;
    if (root.val < newU && root.val > newL) {
      return (
        checkIsValid(root.left, lower, root.val) &&
        checkIsValid(root.right, root.val, upper)
      );
    } else {
      return false;
    }
  }

  return checkIsValid(root, null, null);
}
