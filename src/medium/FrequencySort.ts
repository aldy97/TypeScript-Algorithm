function frequencySort(s: string): string {
  let map: { [key: string]: number } = {};
  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  let SortedCharactersArray = Object.keys(map).sort((a, b) => map[b] - map[a]);
  let result = '';
  for (let char of SortedCharactersArray) result += char.repeat(map[char]);
  return result;
}

console.log(frequencySort('tree'));
