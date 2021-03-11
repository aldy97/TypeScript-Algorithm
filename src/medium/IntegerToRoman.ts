// inghts: both are O(1), because in the question input is ranged from 1 to 3999
// Time: O(1)
// Space: O(1)
function intToRoman(num: number): string {
  const dict: { [key: string]: string } = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M",
  };
  const options = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res: string = "";
  let i = 0;

  while (num !== 0) {
    const d = options[i];
    if (num >= d) {
      res += dict[d.toString()];
      num -= d;
    } else {
      i = d !== 1 ? i + 1 : i;
    }
  }

  return res;
}
