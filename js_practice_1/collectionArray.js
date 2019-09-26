/*
    Arrays
 */

// 1
function User(name, phone) {
    this.name = name;
    this.phone = phone;
}

let user1 = new User("Sergey", '380681111111');
let user2 = new User("Vladislav", '380681111113');
let user3 = new User("Stepan", '380681111112');
let arrayOfUsers = [user1, user2, user3];

// 2
function findPhoneByName(name, array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i].name === name) {
            return array[i].phone;
        }
    }
    return null
}

console.log(`[By array] Stepan's phone number is ${findPhoneByName("Stepan", arrayOfUsers)}\n`);

/*
    Collections
 */

// 1
let catalogMap = new Map();
catalogMap.set(user1.name, user1.phone)
        .set(user2.name, user2.phone)
        .set(user3.name, user3.phone);

// 2
function findPhoneByNameMap(name, array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i]["name"] === name) {
            return array[i].phone;
        }
    }
    return null
}

console.log(`[By map] Vladislav's phone number is ${findPhoneByNameMap("Vladislav", arrayOfUsers)}\n`);