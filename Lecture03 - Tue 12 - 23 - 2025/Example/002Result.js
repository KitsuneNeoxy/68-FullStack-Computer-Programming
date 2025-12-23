let value1 = ['Apple', 1 , false];
let value2 = ['Fries',2 , true, 'Apple'];
let value3 = ['Mars', 9 , 'Apple'];

for (let val1 of value2) {
    for (let val2 of value3) {
        for (let val3 of value1) {
            if (val1 === val2 && val2 === val3) {
                console.log(val1);
            }
        }
    }
};