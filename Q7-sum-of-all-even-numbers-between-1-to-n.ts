// 7. Write a ts program to find sum of all even numbers between 1 to n.

var numNatural: string | null = prompt("enter the all even natural number");
var naturalNum: number = Number(numNatural)
var num1: number = 1;
var sum1: number = 0;
while (num1 <= naturalNum) {
    if (num1 % 2 == 0) {
        sum1 += num1;
        // console.log(`even number is: ${num1}`);
    }
    num1++;
}
console.log(`sum of all natural number 1 to n: ${sum1}`);