import { TreeNode } from "../easy/IsSameTree";
// Insights: BFS
// Time: O(n), where n is number of nodes in root
// Space: O(n)
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];
  let queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;
    const level: number[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift() as TreeNode;
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(level);
  }

  return res;
}
