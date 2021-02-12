// Time: O(Math.max(n,m))
// Space: O(n + m)
function isAnagram(s: string, t: string): boolean {
  let map1 = new Map<string, number>();
  let map2 = new Map<string, number>();
  for (const char of s) {
    const num = map1.get(char) || 0;
    map1.set(char, num + 1);
  }

  for (const char of t) {
    const num = map2.get(char) || 0;
    map2.set(char, num + 1);
  }

  if (map1.size !== map2.size) {
    return false;
  }

  for (const [k, v] of map1) {
    if (map2.get(k) !== v) {
      return false;
    }
  }

  return true;
}
