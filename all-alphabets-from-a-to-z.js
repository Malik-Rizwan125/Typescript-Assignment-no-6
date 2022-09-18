// 3. Write a ts program to print all alphabets from a to z. - using while loop
// var char:string = 'A';
// var alpha:string = 'Z'
// var num:number = Number(char);
// var num2:number = Number(alpha)
// while(alpha<='Z'){
// console.log(`print all alphabet A to Z ${alpha}`)
// alpha++
// }
var startingAlphabet = "A";
var endingAlphabet = "Z";
var asciiCodeOfStartingAlphabet = startingAlphabet.charCodeAt(0);
var asciiCodeOfEndingAlphabet = endingAlphabet.charCodeAt(0);
while (asciiCodeOfStartingAlphabet <= asciiCodeOfEndingAlphabet) {
    console.log(String.fromCharCode(asciiCodeOfStartingAlphabet));
    asciiCodeOfStartingAlphabet++;
}
