// 1
const a = 5;

function inc(num) {
    return --num;
}

const b = inc(a);
console.log(`a = ${a}, b = ${b}`);

// 2
const obj = {
    num : 5
};

function inc2(numObj) {
    return numObj.num--;
}

inc2(obj);
console.log(`obj.num = ${obj.num}`);