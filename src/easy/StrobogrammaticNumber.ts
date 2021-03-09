// Time: O(n)
// Space: O(n)
function isStrobogrammatic(num: string): boolean {
  const rotatable = new Set<string>(["0", "1", "6", "8", "9"]);
  const map: { [key: string]: string } = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let str: string[] = [];
  for (let i = 0; i < num.length; i++) {
    if (!rotatable.has(num[i])) {
      return false;
    } else {
      str.push(map[num[i]] as string);
    }
  }

  return str.reverse().join("") === num;
}
