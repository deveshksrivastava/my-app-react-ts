const dog = {
    name: "Ein",
    breed: "Corgi",
    address: {
        city: 'London'
    },
    speak: function () {
        console.log("Name si woof woof:", this.name);
    }
}

//ADD
const dog1 = { ...dog, city: 'london' }
//DETLET
delete dog.breed
//UPDATE
dog.breed = 'DOBER'
//SEARCH

console.log(dog)
console.log(dog1)


// dog.speak();

// const menu = {
//     lunch: {
//         appetizer: "salad",
//         main: "spaghetti",
//         dessert: "tiramisu"
//     },
//     'dinner': {
//         appetizer: "samosa",
//         main: "saag paneer",
//         dessert: "gulab jamun"
//     }
// };

// console.log(menu.lunch.appetizer) ///salad
// console.log(menu.dinner.appetizer) ///samosa
// console.log(menu['dinner'].appetizer) ///samosa


// // const spices = [
// //     { name: "Emma", nickname: "Baby" },
// //     { name: "Geri", nickname: "Ginger" },
// //     { name: "Mel B", nickname: "Scary" },
// //     { name: "Mel C", nickname: "Sporty" },
// //     { name: "Victoria", nickname: "Posh" }
// // ];

// // console.log(spices[1].name) ///Geri

// // const spiceGirls = {
// //     albums: ["Spice", "Spiceworld", "Forever"],
// //     motto: "Girl Power",
// //     members: spices,
// //     office: {
// //         city: 'London',
// //         area: {
// //             street: {
// //                 street1: 'king willam street',
// //                 postcode: 'sn13lb',
// //                 localcity: 'Swindon'
// //             }
// //         }
// //     }
// // };

// // console.log(spiceGirls.albums[0]) ///Spice
// // console.log(spiceGirls.albums[1]) ///Spiceworld
// // console.log(spiceGirls.members) ///Spiceworld

// // // destruturing
// // const { office: { city, area: { street: { street1, postcode, localcity } } } } = spiceGirls;
// // console.log(street1)
// // console.log(postcode)
// // console.log(localcity)

// // const { albums, ...others } = spiceGirls
// // console.log('album', albums)
// // console.log('others', others)

// // //looping objects
// // Object.entries(spiceGirls).forEach(item => {
// //     console.log('loop-entires--', item)
// // })

// // Object.keys(spiceGirls).forEach(item => {
// //     console.log('loop-keys--', item)
// // })

// // Object.values(spiceGirls).forEach(item => {
// //     console.log('loop-values--', item)
// // })

// // for (let key in spiceGirls) {
// //     console.log('for-in', spiceGirls[key])
// // }

//reversing the string
console.log('hellow learn basic ts code')
function reverseString(str) {
    return str.split('').reverse().join('')
}

function isPalindrome(str) {
    const reverse = str.split('').reverse().join('')
    return reverse === str;
}
const reverser = reverseString('hello, world!')
console.log(reverser)


const palsmdrome = isPalindrome('madam') //true
// const palsmdrome = isPalindrome('india') //fasle
console.log(palsmdrome)

// forwork loop
let str1 = "Hello, World!";
for (let i = 0; i <= str1.length; i++) {
    // console.log(i,str1[i])
    // console.log(i,str1.charAt(i))
}

//backwork/revese loop
let reverse = ''
for (let i = str1.length - 1; i >= 0; i--) {
    // console.log(i,str1[i])
    // console.log(i,str1.charAt(i))
    reverse += str1[i]
}

// Array Example
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    // console.log(`Element at index ${i} is ${numbers[i]}`);
}

// for..in better for array or array of object
for (let itm in numbers) {
    // console.log('testing',numbers[itm])
}


//looping in object
let myobj = { name: 'Devesh', age: 200 }
for (let i in myobj) {
    // console.log(i) //name, age
    // console.log(myobj.name) //Devesh, Devesh
}

//looping array of object
// Choosing the Right Method:
// For Loop: Offers more control, especially when you need to break or continue the loop.
// For-Each Loop: Simpler syntax for straightforward iteration.
// For-In Loop: Primarily used for iterating over object properties.
// For-Of Loop: Modern and concise, suitable for most array iteration scenarios.
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
// For Loop
for (let i in people) {
    // console.log(people[i].name) //Alice, Bob, Charlie
}

// For-Each Loop
people.forEach(person => {
    // console.log(person.name, person.age);//Alice, Bob, Charlie
});


// For-In Loop: Primarily used for iterating over object properties.
//While not recommended for arrays, it can be used to iterate over object properties:
for (const key in people) {        //(WRONG for Array)
    const person = people[key];
    // console.log(person.name, person.age);
}

// For-Of Loop: Modern and concise, suitable for most array iteration scenarios.
for (const person of people) {
    // console.log(person.name, person.age);
}


//NOTE: for..in should be used for array or array of object and for..of should be used for objects
for (const person of people) {
    // console.log(person.name);
}
const filteredPeople = people.filter(person => person.age > 30);
const names = people.map(person => person.name);

// -------------------------------------------
// 6. Counting Vowels in a String
const str3 = "hello World";
const vowels = "aeiou";
let count = 0;

for (let i = 0; i < str3.length; i++) {
    // console.log(i)
    for (let j = 0; j < vowels.length; j++) {
        if (str3[i].toLowerCase() === vowels[j]) {
            // console.log('Count is : ',  str3[i], vowels[j])
            count++
        }
        // console.log(i,j)
    }
}
console.log('Count is : ', count)

// 5. Nested Loop for Pattern Printing
// Create a pyramid or triangle pattern using nested loops.
// Example: Right-Angled Triangle

let rows = 5;
for (let i = 0; i <= rows; i++) {
    let pattern = ''
    for (let j = 1; j <= i; j++) {
        // pattern += '* ';
        // pattern = pattern + '* '
    }
    // console.log(pattern)
}

// 1. Multiplication Table
// Generate a multiplication table using nested loops.
let size = 10;
for (let i = 0; i <= size; i++) {
    let row = ''
    for (let j = 1; j <= size; j++) {
        // pattern += '* ';
        // row += (i * j).toString().padStart(4, ' ')
    }
    // console.log(row)
}

// 4. Transposing a Matrix
// Transposing a matrix involves flipping it over its diagonal, converting rows to columns and vice versa.
const originalMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = [];

for (let i = 0; i < originalMatrix[0].length; i++) { // Iterate over columns
    transposedMatrix[i] = []; // Initialize a new row
    for (let j = 0; j < originalMatrix.length; j++) { // Iterate over rows
    }
}