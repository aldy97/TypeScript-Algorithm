// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
class NestedInteger {
  // If value is provided, then it holds a single integer
  // Otherwise it holds an empty nested list
  constructor(value?: number) {
    // ...
  }

  isInteger(): boolean {
    return true;
  }

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  getInteger(): number | null {
    return 0;
  }

  // Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number) {}

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  add(elem: NestedInteger) {}

  // Return the nested list that this NestedInteger holds,
  // or an empty list if this NestedInteger holds a single integer
  getList(): NestedInteger[] {
    return [];
  }
}

function helper(integer: NestedInteger, depth: number): number {
  let ans = 0;
  if (integer.isInteger()) {
    return (integer.getInteger() as number) * depth;
  } else {
    for (const e of integer.getList()) {
      if (e.isInteger()) {
        ans += (e.getInteger() as number) * (depth + 1);
      } else {
        ans += helper(e, depth + 1);
      }
    }
  }

  return ans;
}

// Time: O(n), where n is number of numbers
// Space: O(n), recursive calles stack up to n in worst case every single NestedInteger is not an integer
function depthSum(nestedList: NestedInteger[]): number {
  let ans = 0;
  for (const item of nestedList) {
    ans += helper(item, 1);
  }

  return ans;
}
