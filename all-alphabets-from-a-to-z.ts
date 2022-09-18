// 3. Write a ts program to print all alphabets from a to z. - using while loop

// var char:string = 'A';
// var alpha:string = 'Z'
// var num:number = Number(char);
// var num2:number = Number(alpha)
// while(alpha<='Z'){
// console.log(`print all alphabet A to Z ${alpha}`)
// alpha++
// }


let startingAlphabet: string = "A";
let endingAlphabet: string = "Z";
let asciiCodeOfStartingAlphabet: number = startingAlphabet.charCodeAt(0);
let asciiCodeOfEndingAlphabet: number = endingAlphabet.charCodeAt(0);

while(asciiCodeOfStartingAlphabet <= asciiCodeOfEndingAlphabet){
    console.log(String.fromCharCode(asciiCodeOfStartingAlphabet))
    asciiCodeOfStartingAlphabet++;
}

