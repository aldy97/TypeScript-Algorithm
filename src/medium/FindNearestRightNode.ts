import { TreeNode } from "../easy/IsSameTree";

// Time and Space: O(n)
function findNearestRightNode(root: TreeNode, u: TreeNode): TreeNode | null {
  if (!root) {
    return null;
  }

  let queue: TreeNode[] = [root];
  while (queue) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const curr = queue.shift() as TreeNode;
      if (curr === u && i !== length - 1) {
        return queue.shift() as TreeNode;
      } else if (curr === u) {
        return null;
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  return null;
}
