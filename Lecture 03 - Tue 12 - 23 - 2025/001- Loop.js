const names = ['Alice', 'Bob', 'Charlie'];

console.log('Using for loop:');
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('Using forEach:');
names.forEach(name => {
    console.log(name);
});

console.log('Using for...of:');
for (const name of names) {
    console.log(name);
}

console.log('Using function in forEach:');
function printName(name) {
    console.log(name);
}
names.forEach(printName);


