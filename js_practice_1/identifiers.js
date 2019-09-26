// 1
let name = "Maxim";

// 2
const myBirthday = 1999;

// 3
let greeting = function (name) {
    console.log(`Hello, ${name}`);
};

// 4
console.log("\nMy name with literal -");
greeting("Maxim");

// 5
console.log("\nMy name with let variable -");
greeting(name);

// 6
const constName = "Maxim";

console.log("\nMy name with constName -");
greeting(constName);


