// 1
let average = (a, b) => (a + b) / 2.0;

// 2
let square = (num) => num * num;

// 3
let cube = (num) => num * num * num;

// 4
let someNumbers = [1,2,3,4,5];
let arrayOfFunctions = [square, cube];

for (let i = 0; i < someNumbers.length; i++) {
    let s = square(someNumbers[i]);
    let c = cube(someNumbers[i]);
    process.stdout.write(
        average(c,s) + " "
    )
}