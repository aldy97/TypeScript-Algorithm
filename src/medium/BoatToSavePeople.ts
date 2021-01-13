// Insights: greedy algorithm + sort + two pointers. Check if the current heaviest person can sit with the lightest one.
// Time: O(nlogn)
// Space: O(logn), this is for sorting
function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);
  let ans = 0;
  let i = 0;
  let j = people.length - 1;

  // can not be i < j, otherwise we might have one person left
  while (i <= j) {
    ans++;
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
  }

  return ans;
}
