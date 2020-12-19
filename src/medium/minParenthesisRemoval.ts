function minRemoveToMakeValid(s: string): string {
  let indexToBeRemoved: number[] = [];
  let stack: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        indexToBeRemoved.push(i);
      } else {
        stack.pop();
      }
    }
  }
  indexToBeRemoved = indexToBeRemoved.concat(stack);
  let ans: string = "";
  for (let i = 0; i < s.length; i++) {
    if (!indexToBeRemoved.includes(i)) {
      ans += s[i];
    }
  }
  return ans;
}
