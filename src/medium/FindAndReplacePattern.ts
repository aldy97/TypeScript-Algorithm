// Time: O(n * m), where n is number of words, and m is the length of a single word
// Space: O(n * m)
function findAndReplacePattern(words: string[], pattern: string): string[] {
  const res: string[] = [];

  const matchPattern = (w: string): boolean => {
    let dict = new Map<string, string>();
    for (let i = 0; i < pattern.length; i++) {
      // if we seen a char for the first time in pattern, then it should also be a char that has never been seen in w up to this point
      if (!dict.has(pattern[i])) {
        if (w.slice(0, i).includes(w[i])) return false;
        dict.set(pattern[i], w[i]);
      } else {
        if ((dict.get(pattern[i]) as string) !== w[i]) return false;
      }
    }
    return true;
  };

  for (const w of words) {
    if (matchPattern(w)) res.push(w);
  }

  return res;
}
