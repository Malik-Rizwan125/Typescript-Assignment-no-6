// 11. Write a ts program to find first and last digit of a number.
var digitInput = 12345;
var firstDigit = digitInput;
var lastDigit = digitInput % 10;
console.log("".concat(lastDigit));
while (firstDigit >= lastDigit) {
    firstDigit = firstDigit % 10;
}
console.log(" ".concat(firstDigit));
