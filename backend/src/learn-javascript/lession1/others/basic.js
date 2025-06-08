console.log('hello world, basic 1-222fdsdsd');

const arr1 = [4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7]

// const mymap = new Map()
// for (let i of arr){
//     mymap.set(i, (mymap.get(i) || 0)+1)
// }
// console.log('mymap', mymap)


const result = arr1.reduce((accumulator, num, currentIndex, arr1) => {
    accumulator[num] = (accumulator[num] || 0) + 1
    console.log(currentIndex)
    console.log(arr1)
    // accumulator = [{name:'adbd', age:300}]
    return accumulator
}, {})

// —--------------------------------Problem Statement 1—-----------------
// Write a function named findOddOccurrences which takes a list of integers as its input and returns a list of integers that appear an odd number of times in the input list.
// Input A list of integers, arr.
// Output A list of integers from arr that appear an odd number of times.
// Constraints The list arr can contain both positive and negative integers. The length of arr can be between 0 and 10,000.
// Function Signature python
// def findOddOccurrences(arr: List[int]) -> List[int]: 
// Example 1
// Input: arr = [1, 2, 3, 2, 3, 1, 3]
// Output: [3]
// Explanation: Here, the number 3 appears 3 times, which is odd. All other numbers appear an even number of times.
// Example 2
// Input: arr = [4, 4, 4, 5, 5, 5, 6, 6, 7]
// Output: [4, 5, 7]
// Explanation: The numbers 4 and 5 appear 3 times, and 7 appears once. 4, 5 & 7 have odd occurrences. Notes If no element has an odd number of occurrences, the function should return an empty list.

// const add = (a: number, b: number) => a + b;
// console.log(add(1, 20));


// let newArr:any[] = []
// const findOddOccurrences = (arr: number[]): number[] => {
//     // const accc = arr.sort((a,b) => a - b)
//     // const unique = [...new Set(arr)];

//     // Create a map to store occurrences of each number
//     const mymap = new Map(  )
//     for(let i of arr){
//         mymap.set(i,(mymap.get(i) || 0)+1)
//     }

//     const temp = []
//     for (let [key,value] of mymap){
//         if (value % 2 !== 0){
//             temp.push(key)
//         }
//     }
//   return temp;
// }

// console.log(findOddOccurrences([4, 4, 4, 5, 5, 5, 6, 6, 7]));


// const arr = [4, 4, 4, 5, 5, 5, 6, 6, 7,7,7]
// // check even or odd
// for(let i of arr){
//     if (i % 2 !== 0 ){
//         console.log(i)
//     }
// }

// // use reducer to get odd numbers
// // Create an object to store occurrences of each number
// const occurrences = arr.reduce((acc:any, num) => {
//     acc[num] = (acc[num] || 0 ) + 1;
//     return acc;
// }, {});
// console.log('reducer',occurrences)    //{"4": 3, "5": 3,  "6": 2,  "7": 3 } 

// const reautl = Object.keys(occurrences)
//     .filter(key => occurrences[key] % 2 !== 0)
//     // .map(Number); // Convert keys back to numbers
// console.log('reducer2',reautl)   //"reducer2",  ["4", "5", "7"]


// // for(let i in arr){
// //     console.log(i)
// // }
// const mymap = new Map(  )
// for(let i of arr){
//     // console.log((mymap.get(i) || 0)+1)
//     mymap.set(i,(mymap.get(i) || 0)+1)
// }

// const temp = []
// for (let [key,value] of mymap){
//     if (value % 2 !== 0){
//         temp.push(key)
//     }
// }

// console.log(mymap,temp) // Map (4) {4 => 3, 5 => 3, 6 => 2, 7 => 3},  [4, 5, 7]


// // use of map 
// // const arr = [4, 4, 4, 5, 5, 5, 6, 6, 7,7,7]

// // const mymap = new Map()
// // for (let i of arr){
// //     mymap.set(i, (mymap.get(i) || 0)+1)
// // }
// // console.log('mymap', mymap) // Map (4) {4 => 3, 5 => 3, 6 => 2, 7 => 3}


const arr = [20, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 9]

const tempsort = arr.sort((a, b) => b - a) //decending
// const tempsort = arr.sort((a:any,b:any) => a-b) //accending
console.log(tempsort)

const totalsum = arr.reduce((acctotal, num) => {
    acctotal[num] = (acctotal[num] || 0) + num
    return acctotal
}, {})
console.log(totalsum)
// const mymap = new Map()
// for (let i of arr){
//     mymap.set(i, (mymap.get(i) || 0)+1)
// }
// console.log('mymap', mymap)


// const result = arr.reduce((accumulator:any,num)=>{
//     accumulator[num] = (accumulator[num] || 0) +1
//     // accumulator = [{name:'adbd', age:300}]
//     return accumulator
// },{})

// console.log(result)