import {TreeNode} from '../easy/IsSameTree';
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) {
    return false;
  }
  let queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    let currLevel = new Set<number>();
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift() as TreeNode;
      if (curr.left && curr.right) {
        if ((curr.left.val === x && curr.right.val === y) ||
            (curr.left.val === y && curr.right.val === x)) {
          return false;
        } else {
          currLevel.add(curr.left.val);
          currLevel.add(curr.right.val);
          queue.push(curr.left);
          queue.push(curr.right);
        }
      } else if (curr.left) {
        currLevel.add(curr.left.val);
        queue.push(curr.left);
      } else if (curr.right) {
        currLevel.add(curr.right.val);
        queue.push(curr.right);
      }
    }
    if (currLevel.has(x) && currLevel.has(y)) {
      return true;
    }
  }
  return false;
};