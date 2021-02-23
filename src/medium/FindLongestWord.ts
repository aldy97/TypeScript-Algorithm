// helper: O(n), where n is the length of given string s
// determines if a word in dictionary can be formed by deleting chars in s
function canBeFormed(s: string, w: string): boolean {
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    if (w[p] === s[i]) {
      p++;
    }
    if (p === w.length) return true;
  }

  return false;
}

// Time: O(n * m + n * m * logm), where m is length of dictionary
// Space: O(m)
function findLongestWord(s: string, d: string[]): string {
  let cans: string[] = [];
  let max = 0;
  for (let w of d) {
    if (canBeFormed(s, w)) {
      if (w.length > max) {
        cans = [w];
        max = w.length;
      } else if (w.length === max) {
        cans.push(w);
      }
    }
  }

  return cans.length ? cans.sort((a, b) => a.localeCompare(b))[0] : "";
}
