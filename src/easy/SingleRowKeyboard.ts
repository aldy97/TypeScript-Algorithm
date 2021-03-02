// Time: O(n)
// Space: O(1), the size of the dictionary is fixed, always 26
function calculateTime(keyboard: string, word: string): number {
  let dict = new Map<string, number>();
  let res = 0;
  let curr = 0;

  for (let i = 0; i < keyboard.length; i++) {
    dict.set(keyboard[i], i);
  }

  for (const char of word) {
    res += Math.abs((dict.get(char) as number) - curr);
    curr = dict.get(char) as number;
  }

  return res;
}
