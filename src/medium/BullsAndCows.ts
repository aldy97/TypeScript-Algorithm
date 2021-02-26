// Time: O(n)
// Space: O(1), secret's max length is 10
function getHint(secret: string, guess: string): string {
  let bulls = 0;
  let cows = 0;

  let mapS = new Map<string, number>();
  let mapG = new Map<string, number>();

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      const n1 = mapS.get(secret[i]) || 0;
      const n2 = mapG.get(guess[i]) || 0;
      mapS.set(secret[i], n1 + 1);
      mapG.set(guess[i], n2 + 1);
    }
  }

  for (const [k, v] of mapS) {
    cows += Math.min(v, mapG.get(k) || 0);
  }

  return `${bulls}A${cows}B`;
}
