/**
 Do not return anything, modify s in-place instead. 
 Do not allocate extra space for another array, 
 you must do this by modifying the input array in-place with O(1) extra memory.
 */
function reverseString(s: string[]): void {
  if (s.length >= 2) {
    let p1 = 0;
    let p2 = s.length - 1;
    while (p1 < p2) {
      const temp = s[p1];
      s[p1] = s[p2];
      s[p2] = temp;
      p1++;
      p2--;
    }
  }
}
