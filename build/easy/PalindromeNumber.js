"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isPalindrome = function (number) {
    if (number < 0) {
        return false;
    }
    else if (number === 0) {
        return true;
    }
    else {
        var numberInString = number.toString();
        var numberInArray = [];
        for (var i = 0; i < numberInString.length; i++) {
            numberInArray.push(numberInString[i]);
        }
        for (var i = 0; i < numberInArray.length; i++) {
            if (numberInArray[i] !== numberInArray.reverse()[i]) {
                return false;
            }
        }
        return true;
    }
};
exports.default = isPalindrome;
