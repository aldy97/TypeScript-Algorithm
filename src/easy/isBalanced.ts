import { TreeNode } from "./IsSameTree";

// function height(node: TreeNode | null) {
//   if (node == null) {
//     /* base case */
//     return 0;
//   }
//   let left: number = height(node.left);
//   let right: number = height(node.right);

//   return Math.max(left, right) + 1;
// }

// function isBalanced(root: TreeNode | null): boolean {
//   return (
//     root == null ||
//     (isBalanced(root.left) &&
//       isBalanced(root.right) &&
//       Math.abs(height(root.left) - height(root.right)) < 2)
//   );
// }
function getHeight(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const LH = getHeight(root.left);
  const RH = getHeight(root.right);
  if (Math.abs(LH - RH) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}
