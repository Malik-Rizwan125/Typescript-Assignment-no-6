// 6. Write a ts program to find sum of all natural numbers between 1 to n.

var num:string |null = prompt('Enter any natural number for sum');
var naturalNumber:number = Number(num)
var i:number = 1;
let sum:number = 0;
while(i<=naturalNumber){
   
    sum += i ;
    i++;

}
console.log(`sum of all natural number ${sum}`)
    


// var endNaturalNumber:number = 100;
// var sum:number = naturalNumber + endNaturalNumber;
// console.log(`sum of all natural number ${sum}`)

// while(naturalNumber<=endNaturalNumber ){
//     console.log(`sum of all natural number ${naturalNumber}`)

//     const sum:number = naturalNumber ;
//     naturalNumber++;
    
// }