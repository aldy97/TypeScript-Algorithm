// Time: O(n)
// Space: O(n)
function halvesAreAlike1(s: string): boolean {
  if (!s.length) return true;

  s = s.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const first = s.slice(0, s.length / 2);
  const second = s.slice(s.length / 2);

  return (
    [...first].filter((char) => {
      return vowels.includes(char);
    }).length ===
    [...second].filter((char) => {
      return vowels.includes(char);
    }).length
  );
}
