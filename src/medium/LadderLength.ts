// helper func
function differByOne(s1: string, s2: string): boolean {
  let diff = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      if (diff === 2) {
        return false;
      }
    }
  }
  return true;
}

// BFS: it is asking for the min steps
// Space and Time: O(m^2 * n), where m is word length and n is number of words in dic
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const dic = new Set<string>(wordList);
  // beginWord is not equal to endWord, otherwise it would be set to 0
  let steps = 1;
  let queue = [beginWord];

  while (queue.length) {
    const num = queue.length;
    for (let i = 0; i < num; i++) {
      const curr = queue.shift() as string;
      if (curr === endWord) {
        return steps;
      }
      for (const word of dic) {
        if (differByOne(curr, word)) {
          dic.delete(word);
          queue.push(word);
        }
      }
    }
    steps++;
  }

  return 0;
}
