// Inights: two-ptrs
// Time: O(n)
// Space: O(1)
function partitonGrades(grades: number[]): number[] {
  let pt0 = 0;
  let pt1 = 0;

  while (grades[pt0] >= 50) {
    pt0++;
  }
  pt1 = pt0;

  while (pt1 < grades.length) {
    if (grades[pt1] < 50) {
      pt1++;
    } else {
      const temp = grades[pt1];
      grades[pt1++] = grades[pt0];
      grades[pt0++] = temp;
    }
  }

  return grades;
}
