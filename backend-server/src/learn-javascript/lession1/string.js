const str = "Hello, World!";
const str2 = "Hello, World!2";
const array = ["indian", "USA", "UK"]

console.log('string is :', str)
// console.log(str.length)             // Output: 13
// console.log(str.includes('Hello'))  // Output: true
// console.log(str.split(','))         // Output: split to array 1. Output:[ 'Hello', ' World!' ], [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!'  ]
// const arrstr = str.split(',')       // Output: [ 'Hello', ' World!' ],
// console.log(arrstr.join(", "))      // Output: join array to string Hello,  World!, Adds all the elements of an array into a string, separated by separator string.
// console.log(str.slice(7, 12))       // Output: slice, World
// console.log(str.substring(4, 14));  // Output: "o, World!" substring(start, end): Extracts a section of a string.
// console.log(str.toUpperCase());     // Output: "HELLO, WORLD!"
// console.log(str.toLowerCase());     // Output: "hello, world!"
// console.log(str.indexOf("World"))   // Output: 7 , Checks if a string contains a substring
// let lastIndex = str.lastIndexOf("o"); // 8
// console.log(str.trim())             // Output: "Hello, World!" ->const str = "   Hello, World!   ";
// console.log(str.replace('Hello', 'hi'))  // Output: "hi, world!"
// let firstChar = str[0];
// console.log(firstChar)              // Output: H, first 
// let secondChar = str.charAt(1);     //  Output: 'e'
// console.log(secondChar)
// // console.log(str, str2)
// //join
// const result1 = str + " " + str2;
// const result2 = `${str} ${str2}`;
// const result3 = str.concat(" ", str2);
// const result4 = array.join(" ");    //  Output: ["Hello", "World"]; to  "Hello World"
// // str += "World";

// let str3 = str.split(' ')           // Output:  [ 'Hello,', 'World!' ] first  Splits a string into an array of substrings.
// console.log('split,', str.split(' '))// Output:  [ 'Hello,', 'World!' ] 
// console.log('join', str3.join(' ')) // Output:  Hello, World!

// let escaped = "He said, \"Hello!\""; // He said, "Hello!" Use backslashes to escape special characters (like quotes !)
// let strNum = (400).toString(); // "400"
// for (let char of str) {
//     console.log(char) //h,e,l,l,o, w,o,r,l,d
// }

// // Example Interview Problems
// // Reverse the string : use the .split(), reverse(), and .join()
// // check for palamdrome: compare a string with the reverse version
// // count the vowels and constants : loop though the string and check each character
// // find first non- repeated character : use a frequecny map to track occuracnes
// // hashtable : use hashtable to store key-value pairs.   //key value ::

// // slice vs substring :
// // Whil both methods are use to extract portions of a string with start and end indices.
// // it will have negative value to get the string 
// // syntax: str.slice(start,end)

// let substr1 = str.slice(0, 5) //output: 'Hello'
// let substr2 = str.slice(7, 12) //output: World
// console.log('slice', substr1, substr2)

//extract exact 3 characters (****)
let substr3 = str.slice(-3) // Output: "ld!" (not there in the substring method), this is the last 3
console.log(substr3)        //

// substring method:
// Syntax: str.substring(start, end)
// // Extracts a section of a string.Inclusive of both the start and end indices.
// // Does not accept negative indices. (****)
let substr1 = str.substring(1, 9); // Output: "ello, Wo"
// // If `end` is less than `start`, the two arguments are swapped. (****)
let substr2 = str.substring(9, 1); // Output: "llo, Wo
console.log('concatination:', substr1, ', ', substr2)

// concat method:
let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
// }

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
}

console.log('Origincal string', str)
console.log('Reversed string', reversed)
