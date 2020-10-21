import {TreeNode} from '../easy/IsSameTree';
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  let result = [];
  let queue: TreeNode[] = [root];
  let height: number = 1;
  while (queue.length !== 0) {
    const size = queue.length;
    let currLevel: number[] = [];
    for (let i = 0; i < size; i++) {
      const curr: TreeNode = queue.shift() as TreeNode;
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        } 
      currLevel.push(curr.val);
    } 
    result.push(height %2 === 0? currLevel.reverse() : currLevel);
    height++;
  }
  return result;
};