import { TreeNode } from "../easy/IsSameTree";
function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  function getMaxHeight(root: TreeNode | null): number {
    if (!root) {
      return 0;
    } else {
      return 1 + Math.max(getMaxHeight(root.left), getMaxHeight(root.right));
    }
  }

  if (getMaxHeight(root.left) === getMaxHeight(root.right)) {
    return root;
  } else if (getMaxHeight(root.left) > getMaxHeight(root.right)) {
    return subtreeWithAllDeepest(root.left);
  } else {
    return subtreeWithAllDeepest(root.right);
  }
}
