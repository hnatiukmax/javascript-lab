// 1
const objConst = {
    name : "Maxim"
};

// 2
let objLet = {
    name : "Maxim"
};

// 3
objConst.name = "Stepan"; // okay
objLet.name = "Stepan"; // okay

// 4
/*
objConst = { // compilation error
    secondName : "Pupkin"
};
*/

objLet = {
    secondName : "Pupkin"
};

// 6
function createUser(name, city) {
    this.name = name;
    this.city = city;
}

let someUser = createUser('Marcus Aurelius', 'Roma');


