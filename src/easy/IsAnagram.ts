function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map: any = {};
  for (let c of s) {
    if (map[c] == null) map[c] = 0;
    map[c]++;
  }
  for (let c of t) {
    if (map[c] > 0) map[c]--;
    else return false;
  }
  return true;
}
