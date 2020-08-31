/** If we try to move the pointer at the longer line inwards, 
we won't gain any increase in area, since it is limited by the shorter line.
But moving the shorter line's pointer could turn out to be beneficial,
as per the same argument, despite the reduction in the width. 
This is done since a relatively longer line obtained by moving
the shorter line's pointer might overcome the reduction
in area caused by the width reduction. **/
function maxArea(height: number[]): number {
  let maxarea = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxarea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
