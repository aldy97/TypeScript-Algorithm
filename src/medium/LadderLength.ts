function getDifference(A: string, B: string) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      count++;
    }
  }
  return count;
}

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const dict = new Set(wordList);
  let step = 1;
  let q = [beginWord];

  while (q.length) {
    const next: any = [];
    for (let w of q) {
      if (w === endWord) return step;

      for (let word of dict) {
        if (getDifference(word, w) === 1) {
          next.push(word);
          dict.delete(word);
        }
      }
    }
    q = next;
    step++;
  }
  return 0;
}
