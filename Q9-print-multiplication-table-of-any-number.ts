// 9. Write a ts program to print multiplication table of any number.

// var num4:string | null = prompt("Enter any number of table");
// var printTable :number = Number(num4);
// var tableNumber = 10;

// while(printTable <= tableNumber){
//     let sum:number = printTable * 2;
//     console.log(`print the table of :${sum}`);
//     printTable++;    
// }

var num4: number = 2;
var tableNumber = 10;

while (num4 <= tableNumber) {
    let sum: number = num4 * 2;
    console.log(`print the table: ${sum}`);
    num4++;
}