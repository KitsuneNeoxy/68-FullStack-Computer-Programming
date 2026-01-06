const scores = [85 , 92, 78, 95 , 88];
let sum = 0;

sum = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;

}); // การ Comma Initial Value 

console.log('Total score:', sum);   