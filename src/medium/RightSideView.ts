import { TreeNode } from '../easy/IsSameTree';
function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  let result: number[] = [root.val];
  let queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    let currLevel: number[] = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift() as TreeNode;
      if (curr.left) {
        queue.push(curr.left);
        currLevel.push(curr.left.val);
      }
      if (curr.right) {
        queue.push(curr.right);
        currLevel.push(curr.right.val);
      }
    }
    const number = currLevel.pop();
    if (number) {
      result.push(number);
    }
  }
  return result;
}
