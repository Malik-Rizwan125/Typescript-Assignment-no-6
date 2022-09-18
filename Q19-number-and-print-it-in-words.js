// 19. Write a ts program to enter a number and print it in words.
var userInput = 10;
var userInputNumber = 20;
var totalInput;
while (userInput != 0) {
    totalInput = (userInputNumber * 10) + (userInput % 10);
    userInput /= 10;
    console.log("".concat(totalInput));
}
while (userInput != 0) {
    switch (userInput % 10) {
        case 0:
            console.log("Zero ");
            break;
        case 1:
            console.log("One ");
            break;
        case 2:
            console.log("Two ");
            break;
        case 3:
            console.log("Three ");
            break;
        case 4:
            console.log("Four ");
            break;
        case 5:
            console.log("Five ");
            break;
        case 6:
            console.log("Six ");
            break;
        case 7:
            console.log("Seven ");
            break;
        case 8:
            console.log("Eight ");
            break;
        case 9:
            console.log("Nine ");
            break;
    }
}
