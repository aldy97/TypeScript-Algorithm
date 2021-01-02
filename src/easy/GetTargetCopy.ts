import { TreeNode } from "./IsSameTree";

// DFS
// Time: O(n), where n is number of nodes
// Space: O(H), where H is the hieght of the tree. Having H as the maximum recursive call stack
function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (!original || !cloned || !target) return null;
  if (original.val === target.val) {
    return cloned;
  }

  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
}

// BFS
// Time: O(n), where n is number of nodes
// Space: O(n), level could contain up to N/2 tree nodes in the case of perfect(complete) tree.
function getTargetCopy2(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (!original || !cloned || !target) return null;

  let q1: TreeNode[] = [original];
  let q2: TreeNode[] = [cloned];

  while (q1 && q2) {
    const len = q1.length;
    for (let i = 0; i < len; i++) {
      const n1 = q1.shift() as TreeNode;
      const n2 = q2.shift() as TreeNode;
      if (n1.val === target.val) {
        return n2;
      }

      if (n1.left && n2.left) {
        q1.push(n1.left);
        q2.push(n2.left);
      }

      if (n1.right && n2.right) {
        q1.push(n1.right);
        q2.push(n2.right);
      }
    }
  }

  return null;
}
