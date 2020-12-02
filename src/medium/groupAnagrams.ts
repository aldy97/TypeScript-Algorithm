function uniform(str: string) {
  return str.split("").sort().join("");
}
function groupAnagrams(strs: string[]): string[][] {
  let map = new Map();
  for (let str of strs) {
    const s = uniform(str);
    const l = map.get(s) || [];
    l.push(str);
    map.set(s, l);
  }
  // from: Creates an array from an iterable object.
  return Array.from(map.values());
}
