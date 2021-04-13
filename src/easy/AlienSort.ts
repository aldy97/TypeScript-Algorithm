// Time: O(n), where n is the length of the words
// Space: O(1), the size of dic is fixed

function isAlienSorted(words: string[], order: string): boolean {
  if (words.length < 2) return true;
  let dict = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    dict.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!isSmaller(words[i], words[i + 1], dict)) {
      return false;
    }
  }

  return true;
}

const isSmaller = (
  a: string,
  b: string,
  dict: Map<string, number>
): boolean => {
  for (let i = 0; i < a.length; i++) {
    if ((dict.get(a[i]) as number) > (dict.get(b[i]) as number)) {
      return false;
    } else if ((dict.get(a[i]) as number) < (dict.get(b[i]) as number)) {
      return true;
    }
  }

  return a.length <= b.length;
};
