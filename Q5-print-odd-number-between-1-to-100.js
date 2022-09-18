// 5. Write a ts program to print all odd number between 1 to 100.
var oddNumber = 0;
var endOddNumber = 100;
while (oddNumber <= endOddNumber) {
    if (oddNumber % 2 == 1)
        console.log("print odd number 1 to 100: ".concat(oddNumber));
    oddNumber++;
}
