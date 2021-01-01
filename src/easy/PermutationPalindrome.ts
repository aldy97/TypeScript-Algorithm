// Time: O(n), Space: O(1)
function canPermutePalindrome(s: string): boolean {
  if (!s) return true;
  let map = new Map<string, number>();

  for (const c of s) {
    const num = map.get(c) || 0;
    map.set(c, num + 1);
  }

  let numOfOdd = 0;
  for (const [c, num] of map) {
    if (numOfOdd > 1) return false;
    if (num % 2 !== 0) numOfOdd++;
  }

  if (numOfOdd > 1) return false;
  return true;
}
