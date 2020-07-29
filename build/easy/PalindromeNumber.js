"use strict";
var isPalindrome = function (number) {
    if (number < 0) {
        return false;
    }
    else if (number === 0) {
        return true;
    }
    else {
        var stringNum = number.toString();
        var stringNumList = [];
        for (var i in (stringNum.length - 1)) {
            stringNumList.push(stringNum[i]);
        }
        return stringNumList === stringNumList.reverse();
    }
};
console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(23)); //false
console.log(isPalindrome(0)); //true
