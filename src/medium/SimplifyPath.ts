// Insights: when ever see "..", pop the first word
// Time: O(n)
// Space: O(n)
function simplifyPath(path: string): string {
  const wordList = path.split("/").filter((char) => char && char !== ".");
  let wordListSim: string[] = [];
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === ".." && wordListSim) {
      wordListSim.pop();
    } else {
      wordListSim.push(wordList[i]);
    }
  }

  return "/" + wordListSim.join("/");
}
