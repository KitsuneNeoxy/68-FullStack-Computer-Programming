const a = 5;
const b = 10;

// Regular Function
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

//Reading the Arrow Example
const subtrac = (a , b) => {
    const result = a - b ;
    return result;
};


console.log (`Addition : ${add (a,b)}`);
console.log (`Addition using Arrow Function : ${addArrow (a,b)}`);
console.log (`Subtraction using Arrow Function : ${subtrac (a,b)}`);