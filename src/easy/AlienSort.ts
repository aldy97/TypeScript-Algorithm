// Two pointer
// Space: O(1), the size of dic is fixed
// Time: O(n), where n is the length of the words
function isAlienSorted(words: string[], order: string): boolean {
  // base case:
  if (words.length <= 1) return true;

  let p1 = 0;
  let p2 = 1;
  // build a dictonary for fast access
  let dic = new Map<string, number>();

  for (let i = 0; i < order.length; i++) {
    dic.set(order[i], i);
  }

  while (p2 < words.length) {
    const left = words[p1];
    const right = words[p2];
    for (let i = 0; i < left.length; i++) {
      const o1 = dic.get(left[i]) as number;
      const o2 = dic.get(right[i]) as number;
      if (!right[i]) {
        return false;
      }
      // right sequence:
      if (o1 < o2) {
        break;
      } else if (o1 > o2) {
        return false;
      }
    }
    p1++;
    p2++;
  }

  return true;
}
