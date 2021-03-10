import { TreeNode } from "../easy/IsSameTree";
// Insights: BFS
// Time: O(n)
// Space: O(n)
function addOneRow(
  root: TreeNode | null,
  v: number,
  d: number
): TreeNode | null {
  if (!root) return null;
  if (d === 1) return new TreeNode(v, root, null);

  let depth = 1;
  let queue: TreeNode[] = [root];

  while (depth !== d - 1 && queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift() as TreeNode;
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    depth++;
  }

  for (const node of queue) {
    const temp1 = node.left;
    node.left = new TreeNode(v, temp1, null);

    const temp2 = node.right;
    node.right = new TreeNode(v, null, temp2);
  }

  return root;
}
