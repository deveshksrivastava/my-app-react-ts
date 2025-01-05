const dog = {
    name: "Ein",
    breed: "Corgi",
    speak: function () {
        console.log("Name si woof woof:", this.name);
    }
}

dog.speak();

const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    'dinner': {
        appetizer: "samosa",
        main: "saag paneer",
        dessert: "gulab jamun"
    }
};

console.log(menu.lunch.appetizer) ///salad
console.log(menu.dinner.appetizer) ///samosa
console.log(menu['dinner'].appetizer) ///samosa


// const spices = [
//     { name: "Emma", nickname: "Baby" },
//     { name: "Geri", nickname: "Ginger" },
//     { name: "Mel B", nickname: "Scary" },
//     { name: "Mel C", nickname: "Sporty" },
//     { name: "Victoria", nickname: "Posh" }
// ];

// console.log(spices[1].name) ///Geri

// const spiceGirls = {
//     albums: ["Spice", "Spiceworld", "Forever"],
//     motto: "Girl Power",
//     members: spices,
//     office: {
//         city: 'London',
//         area: {
//             street: {
//                 street1: 'king willam street',
//                 postcode: 'sn13lb',
//                 localcity: 'Swindon'
//             }
//         }
//     }
// };

// console.log(spiceGirls.albums[0]) ///Spice
// console.log(spiceGirls.albums[1]) ///Spiceworld
// console.log(spiceGirls.members) ///Spiceworld

// // destruturing
// const { office: { city, area: { street: { street1, postcode, localcity } } } } = spiceGirls;
// console.log(street1)
// console.log(postcode)
// console.log(localcity)

// const { albums, ...others } = spiceGirls
// console.log('album', albums)
// console.log('others', others)

// //looping objects
// Object.entries(spiceGirls).forEach(item => {
//     console.log('loop-entires--', item)
// })

// Object.keys(spiceGirls).forEach(item => {
//     console.log('loop-keys--', item)
// })

// Object.values(spiceGirls).forEach(item => {
//     console.log('loop-values--', item)
// })

// for (let key in spiceGirls) {
//     console.log('for-in', spiceGirls[key])
// }
