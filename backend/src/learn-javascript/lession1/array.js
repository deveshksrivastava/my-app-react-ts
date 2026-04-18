const { forEach } = require("lodash");

const arr_str = ["indian", "USA", "UK"]
const arr_num = [10, 20, 30, 40, 50];
const arr_str_obj = [{ name: 'John', age: 20 }, { name: 'Aane', age: 30 }, { name: 'Bane', age: 80 }];
const arr_str_obj1 = [{ name: 'John', age: 20 }, { name: 'Aane', age: 30 }, { name: 'Bane', age: 80, address: { city: 'delhi' } }];
const arr_str_obj_deep = [{ name: 'John', age: 20 }, { name: 'Aane', age: 30, address: { city: 'Mumbai' } }, { name: 'Bane', age: 80 }];

console.log(arr_num)
// ** this is present in both array and string
arr_num.push(500) //push
arr_num.pop()//pop
arr_num.unshift(200)//unshift
arr_num.shift()//shift
arr_num.length //length//3 **
arr_num.includes(30) //includes//true ** //includes works for primitive values (e.g., strings, numbers), not objects. For example:
const result = arr_str_obj.find(obj => obj.name === 'Aane'); //help to find on the object array{ name: 'Aane', age: 30 }
arr_num.indexOf(30, 0) //indexof//2 **
arr_num.slice(0, 2) //slice **
console.log('splice', arr_num.splice(2, 4, 99))//** splice, adding the value after removing 20,30
console.log('splice-remove all', arr_num.splice(0, arr_num.length)); // Removes all elements
arr_num.forEach((element) => console.log(element))
arr_num.map((element) => element * 2)
arr_num.filter((element) => element > 10)
arr_num.reduce((a, b) => a + b, 0)
console.log('find', arr.find((element) => element === 20))

// console.log(arr_num)                // [ 10, 20, 30, 40, 50 ]
// console.log(arr_num.length)         // 5
// console.log(arr_num.includes(30))   // true
// console.log(arr_num.indexOf(30, 0)) //2
// console.log(arr_num.slice(1, 4))    //[ 20, 30, 40 ]

// destructuring
// const [first, second, others] = arr_str_obj
// console.log('destruting first - ', first)
// console.log('destruting first name- ', first.name)
// console.log('destruting age- ', second)

//looping
//forEach
arr_str_obj.forEach(item => {
    console.log('foreach-', item)
})

//map
arr_str_obj.map(item => {
    console.log('map-', item)
})

//for..off
for (let key in arr_str_obj) {
    console.log(key, arr_str_obj[key])
    console.log('arr_str_obj[key]', arr_str_obj[key])
    console.log('arr_str_obj[key]', arr_str_obj[key].name)
}

//adding in array object without ... (will add seperetly)
let newObjAray = null
newObjAray = [arr_str_obj, { name: 'vijay', age: 50 }]
// console.log('newObjAray add seperetly--', newObjAray)

//adding in array object without ... (will add seperetly)
newObjAray = [...arr_str_obj, { name: 'vijay', age: 50 }]
// console.log('newObjAray with same array--', newObjAray)

//updat the array object from John to Harry
//direact update, use forEach will update the actual array
// arr_str_obj.forEach(item => {
//     if (item.name === 'John') {
//         item.name = 'Harry' //no === only =
//     }
//     // return item; // no return 
// })

// console.log('direact update on array object', arr_str_obj)

//indireact update and get the new result use map
const newnewObjAray = arr_str_obj_deep.map(item => {
    if (item.name === 'Aane') {
        return {
            ...item,
            name: 'Tarray',
            address: {
                ...item.address,
                city: 'London'
            },
            //this below user will be added to the new list
            user: {
                empname: 'Vijay',
                empage: 40,
                dept: 'IT'
            }
        }
    }
    return item;
})
// console.log('direact update on array object', newnewObjAray)


// //deleting array
// let deleteArrayObect = null
// deleteArrayObect = arr_str_obj.filter(item => item.name === 'John')
// console.log('filter deleteArrayObect--', deleteArrayObect)

// deleteArrayObect = arr_str_obj.filter(item => item.name !== 'John'.toLowerCase())
// console.log('filter deleteArrayObect--', deleteArrayObect) //.toLowerCase() is very imp

// //sorting array
// let sortArrayObect = null
// // sortArrayObect = arr_str_obj.sort((a, b) => b.name.toLowerCase() - a.name.toLowerCase()) //this don't work as it treat - as subratat which dont works on the string
// sortArrayObect = arr_str_obj.sort((a, b) => a.name.localeCompare(b.name));
// // localeCompare: This method compares two strings in a locale-sensitive way. It is perfect for sorting strings alphabetically
// // sortArrayObect = arr_str_obj.sort((a, b) => b.age - a.age)
// console.log('Sort sortArrayObect--', sortArrayObect)

// //searching array object
// // [filter] -Search for **all objects** with the name 'John', finds all the John
// const searchResultsexact = arr_str_obj.filter(item => item.name.toLowerCase() === 'John'.toLowerCase())
// const searchResultsexcept = arr_str_obj.filter(item => item.name.toLowerCase() !== 'John'.toLowerCase())
// console.log('search results exact', searchResultsexact)
// console.log('search results, except John', searchResultsexcept)

// // [find] -Search for the **first** object with the name 'John'
// const firstMatch = arr_str_obj.find(obj => obj.name.toLowerCase() === 'John'.toLowerCase())
// console.log('search results, find John', firstMatch)

// //delete array object
// const deleteResult = arr_str_obj.filter(item => item.name.toLowerCase() !== 'John'.toLowerCase())
// console.log('delete results', deleteResult)

// //reduce (sum/totoal) array object
// const reduceResult = arr_str_obj.reduce((acc, currentval) => {
//     return acc + currentval.age
// }, 0)
// console.log('reduce results', reduceResult)

// // acc.age + currentval.age, wrong, The acc (accumulator) starts with the initial value you provide (0 in this case), which is a number, not an object with an age property.
// // Trying to access acc.age when acc is a number will result in an error.

console.log(arr_num)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


// UPDATETING OBEJCT


// const newobj = arr_str_obj1.map(item => {
//     if (item.name === 'Bane') {
//         return {
//             ...item,
//             age: 1000,
//             address: {
//                 city: 'Parsi'
//             },
//             country: 'India'
//         }

//     }
//     return item
// })

// Find the object and update the city
// const baneObj = arr_str_obj1.find(obj => obj.name === 'Bane');
// if (baneObj && baneObj.address) {
//     baneObj.address.city = 'Mumbai'; // Update the city
// }

// console.log(newobj)