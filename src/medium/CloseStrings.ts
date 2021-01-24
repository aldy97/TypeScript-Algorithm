// Hint 1: Operation 1 allows you to freely reorder the string.
// Hint 2: Operation 2 allows you to freely reassign the letters' frequencies.
// Time: O(n)
// Space: O(1)
function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  let m1 = new Map<string, number>();
  let m2 = new Map<string, number>();

  for (const c of word1) {
    const v = m1.get(c) || 0;
    m1.set(c, v + 1);
  }

  for (const c of word2) {
    const v = m2.get(c) || 0;
    m2.set(c, v + 1);
  }

  const keys1 = new Set(m1.keys());
  const keys2 = new Set(m2.keys());

  const values1 = [...m1.values()].sort((a, b) => a - b);
  const values2 = [...m2.values()].sort((a, b) => a - b);

  for (const k of keys1) {
    if (!keys2.has(k)) {
      return false;
    }
  }

  return values1.join("") === values2.join("");
}
