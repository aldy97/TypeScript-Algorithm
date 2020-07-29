const toNumber = (char: string): number => {
  if (char === 'I') {
    return 1;
  } else if (char === 'V') {
    return 5;
  } else if (char === 'X') {
    return 10;
  } else if (char === 'L') {
    return 50;
  } else if (char === 'C') {
    return 100;
  } else if (char === 'D') {
    return 500;
  } else if (char === 'M') {
    return 1000;
  } else {
    return -1;
  }
};

const integrate = (numbers: number[]): number[] => {
  if (numbers.length === 1) {
    return numbers;
  } else {
    let i = 0;
    let j = 1;
    while (j <= numbers.length - 1) {
      if (numbers[i] < numbers[j]) {
        numbers[j] = numbers[j] - numbers[i];
        numbers[i] = -numbers[i];
      }
      i++;
      j++;
    }
    let result: number[] = [];
    numbers.filter((number) => number > 0).map((number) => result.push(number));
    return result;
  }
};

const RomanToInteger = (roman: string): number => {
  let result = 0;
  let romanArray: string[] = [];
  for (let i = 0; i < roman.length; i++) {
    romanArray.push(roman[i]);
  }
  let romanConverted: number[] = [];
  romanArray.map((char) => romanConverted.push(toNumber(char)));
  integrate(romanConverted).map((number) => (result += number));
  return result;
};

export default RomanToInteger;
