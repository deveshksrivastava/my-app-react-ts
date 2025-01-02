const dog = {
    name: "Ein",
    breed: "Corgi",
    speak: function () {
        console.log("woof woof", this.name);
    }
}

dog.speak();

const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    dinner: {
        appetizer: "samosa",
        main: "saag paneer",
        dessert: "gulab jamun"
    }
};

