// Insight: iterate s and use stack to store corresponding closing parentheses when seeing opening parentheses
// If seeing a closing, check whether the top is identical to it.
// Time and Space: O(n)
function isValid(s: string): boolean {
  let map: { [s: string]: string } = { "(": ")", "{": "}", "[": "]" };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  // return true when the stack is empty
  return !stack.length;
}
