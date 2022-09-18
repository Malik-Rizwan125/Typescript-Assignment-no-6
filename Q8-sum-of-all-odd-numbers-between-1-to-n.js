// 8. Write a ts program to find sum of all odd numbers between 1 to n.
var naturalNum = prompt("sum of all odd number");
var num3 = 0;
var oddNum = Number(naturalNum);
var sumOfOdd = 0;
while (num3 <= oddNum) {
    if (num3 % 2 == 1) {
        sumOfOdd += num3;
    }
    num3++;
}
console.log("sum of all odd number ".concat(sumOfOdd));
