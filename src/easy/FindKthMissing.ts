// Time and Space: O(n)
function findKthPositive(arr: number[], k: number): number {
  const set = new Set<number>(arr);
  for (let i = 1; i < Infinity; i++) {
    if (!set.has(i)) {
      if (k > 1) {
        k--;
      } else {
        return i;
      }
    }
  }

  return -1;
}

// Binary search
// Time: O(nlogn)
// Space: O(1);
function findKthPositive2(arr: number[], k: number): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);
    // If number of positive integers
    // which are missing before arr[pivot]
    // is less than k -->
    // continue to search on the right.
    if (arr[pivot] - pivot - 1 < k) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  // At the end of the loop, left = right + 1,
  // and the kth missing is in-between arr[right] and arr[left].
  // The number of integers missing before arr[right] is
  // arr[right] - right - 1 -->
  // the number to return is
  // arr[right] + k - (arr[right] - right - 1) = left + k
  return left + k;
}
