// 1
let arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

let types = {
    number: 0,
    string: 0,
    boolean: 0
};

let emptyTypes = {};

for (let item of arr) {
    types[typeof item]++;
}

for (let item of arr) {
    emptyTypes[typeof item] = 0;
}

// add number of different types
console.log(types);

// add all keys
console.log(emptyTypes);