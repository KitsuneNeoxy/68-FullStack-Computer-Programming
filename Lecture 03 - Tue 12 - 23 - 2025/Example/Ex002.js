let values1 = ['Apple', 1 , false];
let values2 = ['Fries',2 , true, 'Apple'];
let values3 = ['Mars', 9 , 'Apple'];

const values = [values1,values2,values3];
const common = values.reduce((acc, curr) => acc.filter(item => curr.includes(item)));

console.log(String(common));

//const common = arr1.filter(item => arr2.includes(item)); console.log(common);