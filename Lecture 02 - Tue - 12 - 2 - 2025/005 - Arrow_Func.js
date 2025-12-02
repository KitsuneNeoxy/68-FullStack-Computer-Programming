const a = 5;
const b = 10;

// Regular Function
const add = function(x, y) {
    return x + y;
};

// Arrow Function
const addArrow = (x, y) => x + y;

//Reading the Arrow Example
const subtrac = (x , y) => {
    const result = x - y;
    return result;
};


console.log (`Addition : ${add (a,b)}`);
console.log (`Addition using Arrow Function : ${addArrow (a,b)}`);
console.log (`Subtraction using Arrow Function : ${subtrac (b , a)}`);