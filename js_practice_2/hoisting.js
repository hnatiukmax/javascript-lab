a = 10;
console.log(`a = ${a}`);
console.log(`b = ${b}`);


function someFunction() {
    let a;
    var b = 20;
}

// Initialize x in the global scope
var x = 100;
function hoist() {
// A condition that should not affect the outcome of the code
    if (false) {
        var x = 200;
    }
    console.log(x);
}
hoist(); // undefined
