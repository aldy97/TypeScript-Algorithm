const isPalindrome = (number: number): boolean => {
  if (number < 0) {
    return false;
  } else if (number === 0) {
    return true;
  } else {
    const numberInString: string = number.toString();
    let numberInArray: string[] = [];
    for (let i = 0; i < numberInString.length; i++) {
      numberInArray.push(numberInString[i]);
    }
    for (let i = 0; i < numberInArray.length; i++) {
      if (numberInArray[i] !== numberInArray.reverse()[i]) {
        return false;
      }
    }
    return true;
  }
};

export default isPalindrome;
