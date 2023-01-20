// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let Onevar = "String";
let Twovar = 1;
let Threevar = true;
let Fourvar = undefined;
let Fivevar = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
let print = (msg)=>{return console.log(msg)};
print(typeof Onevar);
print(typeof Twovar);
print(typeof Threevar);
print(typeof Fourvar);
print(typeof Fivevar);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
print(`My income is ${Twovar}, Am i happy? ${Threevar}`);
// reassign the value of the variable that references "null"
Fivevar = "MACARONIA WITH THE CHICKEN STRIPS?!?!";
// print the value and its type
print(Fivevar+" ITS TYPE: "+typeof Fivevar);
// print a variable that causes a ReferenceError
print(MACARAONINAWITHTHECHICKENSTRIPS);
// alter the previous line to no longer cause a ReferenceError
print(Fivevar); //dont refrence a thing that doenst exist.