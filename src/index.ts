/** Interview question from Jerry.
 *  Give a string that contains a regular expression and another string
 *  for example: '**+*{2} aaabbbcdd'
 *  '*' means repeat a letter three times
 *  '+' means a letter appears once
 *  '*'{n} means repeat a letter n times
 *  returns true if the target array matches the regex pattern
 *  **/

//helper function: check whether a string conatin only one type of letter
function checkSame(s: string): boolean {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      return false;
    }
  }
  return true;
}

const stringChallenge = (s: string) => {
  const array = s.split(' ');
  const regex = array[0];
  const target = array[1];
  let scheme: number[] = [];
  for (let char of regex) {
    if (char === '+') {
      scheme.push(1);
    } else if (char === '*') {
      scheme.push(3);
    } else if (!isNaN(parseInt(char))) {
      scheme[scheme.length - 1] = parseInt(char);
    }
  }
  let curr = 0;
  for (let num of scheme) {
    if (num !== 1) {
      if (!checkSame(target.substr(curr, num))) {
        return false;
      }
    }
    curr += num;
  }
  //checks whether the target contains extra that is not checked by the scheme
  return curr === target.length;
};
