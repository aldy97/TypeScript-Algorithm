//helper: returns true if the char is a letter (upper/lower case) or a number
function isCharacterALetter(char: string): boolean {
  return /[a-zA-Z]/.test(char) || !isNaN(parseInt(char));
}

function isPalindrome2(s: string): boolean {
  const filteredString = [...s].filter((char) => isCharacterALetter(char));
  if (filteredString.length === 0 || filteredString.length === 1) return true;
  let p1 = 0;
  let p2 = filteredString.length - 1;
  while (p1 <= p2) {
    if (filteredString[p1].toUpperCase() !== filteredString[p2].toUpperCase()) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

console.log(isPalindrome2('0P'));
