//helper: checks whether the string is an open or a closing parentheses
const isOpen: (s: string) => boolean = (s: string) => {
  if (s === '{' || s === '[' || s === '(') {
    return true;
  } else {
    return false;
  }
};

//helper: checks whether the closing parentheses matches with the top string in the stack
const isMatch: (topElement: string, s: string) => boolean = (
  topElement: string,
  s: string
) => {
  if (s === '}') {
    return topElement === '{';
  } else if (s === ']') {
    return topElement === '[';
  } else return topElement === '(';
};

function isValid(s: string): boolean {
  if (s === '') {
    return true;
  }
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (isOpen(s[i])) {
      stack.push(s[i]);
    } else if (isMatch(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0 ? true : false;
}
