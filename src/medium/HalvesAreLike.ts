// Time: O(n)
// Space: O(n)
function halvesAreAlike1(s: string): boolean {
  if (!s.length) return true;

  s = s.toLowerCase();
  const vowels = new Set<string>(["a", "e", "i", "o", "u"]);
  const first = s.slice(0, s.length / 2);
  const second = s.slice(s.length / 2);

  return (
    [...first].filter((char) => {
      return vowels.has(char);
    }).length ===
    [...second].filter((char) => {
      return vowels.has(char);
    }).length
  );
}

// Time: O(n)
// Space: O(1)
function halvesAreAlike2(s: string): boolean {
  if (!s.length) return true;

  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1,
    c1 = 0,
    c2 = 0;
  const set = new Set<string>(["a", "e", "i", "o", "u"]);

  while (left < right) {
    if (set.has(s[left])) {
      c1++;
    }
    if (set.has(s[right])) {
      c2++;
    }

    left++;
    right--;
  }

  return c1 === c2;
}
