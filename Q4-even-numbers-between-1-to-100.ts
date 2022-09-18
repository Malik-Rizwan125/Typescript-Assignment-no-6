// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop

var evenNumberStart: number = 0;
var evenNumberEnd: number = 100;

while (evenNumberStart <= evenNumberEnd) {
    if (evenNumberStart % 2 == 0)
        console.log(`Print all even number ${evenNumberStart}`)
    evenNumberStart++;
}