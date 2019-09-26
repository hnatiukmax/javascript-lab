// 1
for (let i = 15; i <= 30; i++) {
    if (i % 2 !== 0) {
        process.stdout.write(i + " ")
    }
}
console.log("\n");

// 2
console.log('With function :');
let range = function(start, end) {
    for (let i = 15; i <= 30; i++) {
        if (i % 2 !== 0) {
            process.stdout.write(i + " ");
        }
    }
}(15, 30);
