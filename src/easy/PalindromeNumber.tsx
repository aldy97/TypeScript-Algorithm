const isPalindrome = (number: number): boolean => {
  if (number < 0) {
    return false;
  } else if (number === 0) {
    return true;
  } else {
    const stringNum: string = number.toString();
    let stringNumList: string[] = [];
    for (let i in (stringNum.length - 1) as any) {
      stringNumList.push(stringNum[i as any]);
    }
    return stringNumList === stringNumList.reverse();
  }
};

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(23)); //false
console.log(isPalindrome(0)); //true
