function decodeString(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let curr = stack.pop();
    let str = "";
    while (curr !== "[") {
      str = curr + str;
      curr = stack.pop();
    }
    let num = "";
    curr = stack.pop();
    while (!Number.isNaN(Number(curr))) {
      num = curr + num;
      curr = stack.pop();
    }
    stack.push(curr as string);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join("");
}
