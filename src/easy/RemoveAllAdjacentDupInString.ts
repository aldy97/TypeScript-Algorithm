// Insights: use stack
// Time: O(n), where n is the size of the string
// Space: O(n)
function removeAdjacentDuplicates(s: string): string {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack ? stack.join("") : "";
}
