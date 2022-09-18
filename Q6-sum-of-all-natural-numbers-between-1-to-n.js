// 6. Write a ts program to find sum of all natural numbers between 1 to n.
var num = prompt('Enter any natural number for sum');
var naturalNumber = Number(num);
var i = 1;
var sum = 0;
while (i <= naturalNumber) {
    sum += i;
    i++;
}
console.log("sum of all natural number ".concat(sum));
// var endNaturalNumber:number = 100;
// var sum:number = naturalNumber + endNaturalNumber;
// console.log(`sum of all natural number ${sum}`)
// while(naturalNumber<=endNaturalNumber ){
//     console.log(`sum of all natural number ${naturalNumber}`)
//     const sum:number = naturalNumber ;
//     naturalNumber++;
// }
