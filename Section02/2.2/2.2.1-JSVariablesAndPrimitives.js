// create a constant variable (const)
const Forever = "";

// create a variable that can be reassigned (let)
let changeable = "stringggg";
// create three variables and assign them values of different data types (=)
let string = "Yo";
let num = 123;
let bool = true;
// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof num);
console.log(typeof bool);

// change the value referenced by a variable (dynamic typing)
changeable = 1234567;

// print the type of the variable you just changed (typeof)
function print(msg) {
  console.log(msg);
} //declare a print function

print(typeof changeable);

// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?

let Name = "max";
let lang = "Spanish";

console.log(
  "Hello, my name is " +
    Name +
    ", and I am learning " +
    lang +
    ". I have been practicing for only " +
    num +
    " weeks, so my status as a master is: " +
    bool +
    "."
);
