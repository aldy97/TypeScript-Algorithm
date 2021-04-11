import { TreeNode } from "../easy/IsSameTree";

// Time: O(n)
// Space: O(n)
function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0;

  const depth = getDepth(root);
  let currDepth = 1;
  let queue: TreeNode[] = [root as TreeNode];

  while (queue.length > 0) {
    if (currDepth === depth) {
      return queue.reduce((acc, curr) => acc + curr.val, 0);
    }

    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const tree = queue.shift() as TreeNode;
      if (tree.left) {
        queue.push(tree.left);
      }
      if (tree.right) {
        queue.push(tree.right);
      }
    }
    currDepth++;
  }

  return -1;
}

// helper: 1-based
const getDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};
