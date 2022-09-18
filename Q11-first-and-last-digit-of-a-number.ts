// 11. Write a ts program to find first and last digit of a number.

var digitInput:number = 12345;
var firstDigit:number = digitInput;
var lastDigit:number = digitInput % 10;
console.log(`${lastDigit}`)

while(firstDigit>=lastDigit){
  firstDigit =  firstDigit % 10;
} console.log(` ${firstDigit}`)