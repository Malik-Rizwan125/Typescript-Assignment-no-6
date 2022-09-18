// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
var evenNumberStart = 0;
var evenNumberEnd = 100;
while (evenNumberStart <= evenNumberEnd) {
    if (evenNumberStart % 2 == 0)
        console.log("Print all even number ".concat(evenNumberStart));
    evenNumberStart++;
}
