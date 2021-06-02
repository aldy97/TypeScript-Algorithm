// Insight1: bottom-up dp
// Insight2: Instead of adding a character, try deleting a character to form a chain in reverse.
// Time: O(N * (log(N) + L^2))
// Space: O(N)
function longestStrChain(words: string[]): number {
  // helper: determines if w1 is the predecessor of w2
  const isPredecessor = (w1: string, w2: string): boolean => {
    if (w2.length - w1.length !== 1) return false;
    for (let i = 0; i < w2.length; i++) {
      const w2AfterDel = [...w2].filter((char, index) => index !== i).join("");
      if (w2AfterDel === w1) return true;
    }
    return false;
  };

  // sort words from shortest to longest
  words = words.sort((a, b) => a.length - b.length);

  let len: number[] = new Array(words.length).fill(1);
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isPredecessor(words[j], words[i])) {
        len[i] = Math.max(len[i], len[j] + 1);
      }
    }
  }

  return Math.max(...len);
}
