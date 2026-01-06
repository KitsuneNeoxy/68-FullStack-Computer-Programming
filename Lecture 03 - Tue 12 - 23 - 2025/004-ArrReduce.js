const number = [15, 16, 17, 18, 19];

const sum =
number.reduce((accumulator, currentValue) => {
     return accumulator + currentValue;
}, 0);


console.log(sum);