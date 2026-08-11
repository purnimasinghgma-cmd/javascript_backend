const process  = require("process");

const argument  = process.argv;
console.log(argument);

const operation = argument[2];
const a = argument[3];
const b = number(argument[4]);

console.log(operation, typeof a, typeof b);

function add(x,y) {
    console.log("Addition:", x+y);

}

add(a, b);