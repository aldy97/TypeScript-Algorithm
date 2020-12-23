// Time and Space: O(n)
function firstUniqChar(s: string): number {
  let map = new Map<string, number>();
  for (const c of s) {
    let num = map.get(c) || 0;
    map.set(c, num + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
