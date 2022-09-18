// 7. Write a ts program to find sum of all even numbers between 1 to n.
var numNatural = prompt("enter the all even natural number");
var naturalNum = Number(numNatural);
var num1 = 1;
var sum1 = 0;
while (num1 <= naturalNum) {
    if (num1 % 2 == 0) {
        sum1 += num1;
        // console.log(`even number is: ${num1}`);
    }
    num1++;
}
console.log("sum of all natural number 1 to n: ".concat(sum1));
