import { TreeNode } from "../easy/IsSameTree";
// Insights: recursion on both left and right subtrees
// Time: O(n), one pass
// Space: O(H), call stack rises due to recursion
function str2tree(s: string): TreeNode | null {
  if (!s) return null;
  if (!s.includes("(") && !s.includes(")")) return new TreeNode(parseInt(s));

  // find the first number
  let endOfFirstNum: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      endOfFirstNum = i;
      break;
    }
  }
  const firstNum = parseInt(s.slice(0, endOfFirstNum));
  const node = new TreeNode(firstNum);

  // find the left and right subtrees
  let openings = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      openings++;
    } else if (s[i] === ")") {
      openings--;
      if (openings === 0) {
        const leftSub = s.slice(endOfFirstNum + 1, i);
        const rightSub = s.slice(i + 2, s.length - 1);

        node.left = str2tree(leftSub);
        node.right = str2tree(rightSub);
        break;
      }
    }
  }

  return node;
}
