function maxScore(cardPoints: number[], k: number): number {
  const n = cardPoints.length;
  const minLen = n - k;
  let sum = 0;

  for (let i = 0; i < minLen; i++) {
    sum += cardPoints[i];
  }
  let minSum = sum;
  let i = 0,
    j = minLen - 1;

  while (++j < n) {
    sum -= cardPoints[i++];
    sum += cardPoints[j];
    minSum = Math.min(sum, minSum);
  }

  const total = cardPoints.reduce((acc, cur) => acc + cur, 0);
  return total - minSum;
}
