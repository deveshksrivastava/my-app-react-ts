## Index
 - Array 
 - reduce


<!-- -------------map()----------------------------------------------- -->
The JavaScript map() function is incredibly useful for transforming data in an array by applying a function to each element. Here are some real-world examples where map() can be handy:

###  1. Extracting Specific Properties from an Array of Objects
Scenario: Suppose you have an array of user objects, and you want to create an array of only their names.

Code:
```
const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 25 },
];

const userNames = users.map(user => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
```
Explanation: This transforms each user object into just the name property, resulting in an array of names.

### 2. Formatting Prices with Currency
Scenario: You have an array of product prices in plain numbers, and you want to display them as currency.

Code:
```
const prices = [5, 10, 15];
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices); // Output: ['$5.00', '$10.00', '$15.00']
```
Explanation: The map() method is used here to format each price as a currency string.

### 3. Converting Units (e.g., Celsius to Fahrenheit)
Scenario: You have temperatures in Celsius, and you need to convert them to Fahrenheit.

Code:
```
const celsiusTemps = [0, 20, 30, 40];
const fahrenheitTemps = celsiusTemps.map(temp => (temp * 9/5) + 32);
console.log(fahrenheitTemps); // Output: [32, 68, 86, 104]
```
Explanation: The map() function converts each Celsius temperature to Fahrenheit by applying the formula.

### 4. Creating HTML Elements from Data
Scenario: Given an array of items, you want to create HTML elements for each item, such as list items (<li>).

Code:
```
const items = ['Apples', 'Bananas', 'Oranges'];
const listItems = items.map(item => `<li>${item}</li>`);
console.log(listItems);
// Output: ['<li>Apples</li>', '<li>Bananas</li>', '<li>Oranges</li>']
```
Explanation: This creates an array of HTML strings for each item, which could be later inserted into the DOM.

### 5. Adding Calculated Properties to Objects
Scenario: Suppose you have an array of products, each with a price and quantity. You want to calculate and add a totalCost property to each product.

Code:
```
const products = [
  { name: 'Shirt', price: 20, quantity: 3 },
  { name: 'Pants', price: 40, quantity: 2 },
  { name: 'Hat', price: 15, quantity: 4 },
];

const productsWithTotalCost = products.map(product => ({
  ...product,
  totalCost: product.price * product.quantity,
}));
console.log(productsWithTotalCost);
// Output: [{ name: 'Shirt', price: 20, quantity: 3, totalCost: 60 }, ...]
```
Explanation: The map() function creates a new object for each product, adding a calculated totalCost property.

### 6. Normalizing Data (e.g., Capitalizing Names)
Scenario: You have an array of names, and you want to capitalize the first letter of each name.

Code:
```
const names = ['alice', 'bob', 'charlie'];
const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalizedNames); // Output: ['Alice', 'Bob', 'Charlie']
```
Explanation: This uses map() to apply capitalization logic to each name.

### 7. Parsing JSON Objects
Scenario: You receive an array of JSON strings from an API and need to parse them into objects.

Code:
```
const jsonStrings = ['{"id":1,"name":"Alice"}', '{"id":2,"name":"Bob"}'];
const objects = jsonStrings.map(JSON.parse);
console.log(objects); // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```
Explanation: The map() method applies JSON.parse to each JSON string, converting it into an object.

### 8. Calculating Discounts on Products
Scenario: Suppose you have an array of product prices, and you want to calculate a 10% discount on each product.

Code:
```
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices); // Output: [90, 180, 270]
```
Explanation: map() applies a 10% discount to each price, returning an array of discounted prices.

### 9. Converting Dates to Readable Format
Scenario: You have an array of date strings in ISO format and want to convert them to a more readable format.

Code:
```
const dates = ['2023-10-01', '2023-10-15', '2023-11-01'];
const readableDates = dates.map(date => new Date(date).toLocaleDateString());
console.log(readableDates); // Output: ['10/1/2023', '10/15/2023', '11/1/2023']
```
Explanation: map() converts each date string into a human-readable format using toLocaleDateString().

### 10. Converting RGB Colors to Hex
Scenario: Given an array of RGB color values, you want to convert each to its hexadecimal equivalent.

Code:
```
const rgbColors = [
  { r: 255, g: 0, b: 0 },
  { r: 0, g: 255, b: 0 },
  { r: 0, g: 0, b: 255 }
];

const hexColors = rgbColors.map(({ r, g, b }) =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
);

console.log(hexColors); // Output: ['#ff0000', '#00ff00', '#0000ff']
```
Explanation: This uses map() to convert RGB values to their hex equivalent, which is commonly used in web development.

These examples demonstrate how versatile map() is for transforming data, from simple numerical calculations to more complex data transformations!

<!-- ----------------Reduce---------------------------------- -->

# Reeduce
The JavaScript reduce() method is a powerful array method used to accumulate a single output from an array by applying a function to each element. It is commonly used for tasks like summing numbers, merging objects, or transforming data structures.

How reduce() Works:
The reduce() method executes a "reducer" function (provided as a callback) on each element of the array. This reducer function takes two main arguments:

 + Accumulator: The accumulated value so far.
 + Current Value: The current element in the array.
Syntax:
```

array.reduce((accumulator, currentValue, currentIndex, array) => {
  // reducer logic
}, initialValue);
```
 + accumulator: Keeps track of the accumulated value as reduce iterates over each element.
 + currentValue: The current element being processed in the array.
 + currentIndex (optional): The index of the current element.


 + array (optional): The array reduce was called upon.
 + initialValue: The starting value for the accumulator. If omitted, the first element of the array is used as the initial value, and reduce starts from the second element.
 ### Example of reduce() in Action:
A simple example of using reduce() to sum all numbers in an array:

```


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

```
How reduce() Works Internally (Behind the Scenes):
Initialization:

 + If initialValue is provided, the accumulator starts with this value.
 + If initialValue is not provided, accumulator is set to the first element of the array, and iteration begins with the second element.
Iteration:

For each element in the array, the reducer function is called with the current accumulator and currentValue.
The reducer function's return value becomes the new accumulator value for the next iteration.
Completion:

After all elements have been processed, reduce() returns the final value of the accumulator.
 + Behind-the-Scenes Implementation (Simplified Example):
 + Internally, reduce can be implemented similarly to this:

```
function customReduce(arr, reducer, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIdx = initialValue !== undefined ? 0 : 1;

  for (let i = startIdx; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i], i, arr);
  }
  
  return accumulator;
}
```
// Example usage:

```
const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (acc, val) => acc + val, 0);
console.log(sum); // Output: 15
```

Real-World Use Cases of reduce():
 +  Sum of Array Elements: Quickly add up numbers in an array.
 +  Flattening Arrays: Convert an array of arrays into a single array.
 +  Counting Occurrences: Tally the occurrences of elements in an array.
 +  Transforming Data Structures: Convert an array of objects into a different structure, such as an object keyed by a specific property.
 +   The reduce method is highly versatile, making it a valuable tool in JavaScript for summarizing, transforming, or restructuring data in functional programming styles.


 ## 1. Sum of Array Elements
Purpose: Calculate the sum of all numbers in an array.
```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15

Explanation: reduce() accumulates each number into acc, starting from 0
```

 ## 2. Flattening Arrays
Purpose: Convert an array of arrays into a single, flat array

```
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, current) => acc.concat(current), []); //adding 1 array into another array
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

```

## 3. Counting Occurrences
Purpose: Tally the occurrences of each element in an array.
```
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }

```
Explanation: The function initializes each fruit in acc as 0 if it doesn’t exist and increments the count with each occurrence.

## 4. Transforming Data Structures
Purpose: Convert an array of objects into an object keyed by a specific property.

```
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const userObject = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(userObject);
// Output:
// {
//   '1': { id: 1, name: 'Alice' },
//   '2': { id: 2, name: 'Bob' },
//   '3': { id: 3, name: 'Charlie' }
// }
```
Explanation: Each object in the users array is assigned to a key in acc based on user.id, transforming the array into an object structure.


<!-- ---------MAP/SET----------------- -->

Here are real-world examples of how JavaScript Map and Set data structures can be used effectively:

## Real-World Examples of Map
Storing User Information by Unique ID:

Use Case: In a web application, you often need to store and quickly access user data by a unique identifier, like a user ID.
Example:
```
const userMap = new Map();
userMap.set(1, { name: 'Alice', age: 30 });
userMap.set(2, { name: 'Bob', age: 25 });
userMap.set(3, { name: 'Charlie', age: 35 });

console.log(userMap.get(2)); // Output: { name: 'Bob', age: 25 }
```
Explanation: This allows for fast lookups by user ID, especially useful when there are many users.

#### Tracking API Call Cache:

Use Case: When working with APIs, storing responses in a cache with keys for each endpoint can optimize performance by avoiding redundant requests.
Example:
```
const apiCache = new Map();

function getApiData(url) {
  if (apiCache.has(url)) {
    return apiCache.get(url);
  } else {
    const response = fetch(url).then(res => res.json());
    apiCache.set(url, response);
    return response;
  }
}
```
Explanation: Map allows caching of API responses with URLs as keys, saving resources and time by retrieving cached responses.

#### Counting Occurrences of Words:

Use Case: Counting the frequency of each word in a text for analytics, such as determining the most common keywords in a document.
Example:
```
const wordCount = new Map();
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

words.forEach(word => {
  wordCount.set(word, (wordCount.get(word) || 0) + 1);
});

console.log(wordCount); // Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
```
Explanation: Map efficiently counts each word's occurrences, making it easy to retrieve any word’s count.


## Real-World Examples of Set
#### Removing Duplicate Entries:

Use Case: When working with data from a form or database, removing duplicate entries is often necessary to ensure uniqueness.
Example:
```
const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];
const uniqueNames = Array.from(new Set(names));

console.log(uniqueNames); // Output: ['Alice', 'Bob', 'Charlie']
```
Explanation: Set only stores unique values, making it easy to remove duplicates by converting back to an array.

#### Tracking Unique Visitors to a Website:

Use Case: You may want to track unique visitors based on IP addresses.
Example:
```
const uniqueVisitors = new Set();

function logVisit(ipAddress) {
  uniqueVisitors.add(ipAddress);
}

logVisit('192.168.1.1');
logVisit('192.168.1.2');
logVisit('192.168.1.1'); // Duplicate IP

console.log(uniqueVisitors.size); // Output: 2 (only unique IPs are counted)
```
Explanation: Set ensures each IP address is recorded only once, so duplicates are ignored.

#### Finding Common Items Between Two Sets:

Use Case: In recommendation engines or interest-based applications, finding shared items between user preference sets can help tailor suggestions.
Example:
```
const user1Interests = new Set(['sports', 'music', 'movies']);
const user2Interests = new Set(['music', 'travel', 'movies']);

const commonInterests = new Set([...user1Interests].filter(interest => user2Interests.has(interest)));

console.log(commonInterests); // Output: Set { 'music', 'movies' }
```
Explanation: Set allows easy comparison of interests by taking advantage of its unique-value storage to find common items.

### Summary of Use Cases
 1. Map: Best for key-value pairs where keys are unique and values can be looked up quickly. Common uses include data caching, fast lookups, and tracking unique entities by a specific identifier.
 2. Set: Best for storing unique values without duplicates. Common uses include deduplication, membership tests, and finding intersections between data sets.
Using Map and Set effectively enhances performance, especially when working with large data sets that require frequent access or validation for uniqueness.


-----------------

## MAP

The Map object is a built-in data structure that allows you to store key-value pairs, where any value (including objects and functions) can be used as a key. Here are the key properties and methods of the Map object:

Key Properties of Map
## size:
Returns the number of key-value pairs in the map.
Example:
```
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.size); // Output: 2
```
## Key Methods of Map
####  set(key, value):

Adds or updates an entry in the map with the specified key and value. If the key already exists, the value is updated.
Example:
```
map.set('c', 3);
```
#### get(key):

Retrieves the value associated with a specific key in the map. Returns undefined if the key does not exist.
Example:
```
console.log(map.get('a')); // Output: 1
```
#### has(key):

Checks if a specific key exists in the map. Returns true if the key exists, otherwise false.
Example:
```
console.log(map.has('a')); // Output: true
console.log(map.has('z')); // Output: false
```
#### delete(key):

Removes an entry from the map by its key. Returns true if the key was found and deleted, otherwise false.
Example:
```
map.delete('a');
console.log(map.has('a')); // Output: false
clear():
```

Removes all entries from the map.
Example:

#### map.clear();
console.log(map.size); // Output: 0
keys():

Returns an iterator object containing all the keys in the map.
Example:
```
for (let key of map.keys()) {
  console.log(key);
}
```
#### values():

Returns an iterator object containing all the values in the map.
Example:
```
for (let value of map.values()) {
  console.log(value);
}
```

#### entries():

Returns an iterator object containing all key-value pairs as [key, value] arrays.
Example:
```
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
```

#### forEach(callback):

Executes a provided callback function once for each key-value pair in the map, in insertion order.
Example:
```
map.forEach((value, key) => {
  console.log(key, value);
});
```
Additional Details
Order: Map maintains the insertion order of elements, meaning elements are iterated in the order they were added.
Flexible Key Types: In Map, keys can be any data type, including objects, functions, and primitive values.
The Map object provides efficient methods for managing collections of key-value pairs, and it’s particularly useful when you need unique keys and flexible key types.