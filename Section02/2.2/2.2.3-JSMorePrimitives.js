// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "Good Morning!";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Hey, ${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let Newval;
// Print the new variable and its type
// What type should we expect?
console.log(typeof Newval);
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
Newval = null;
// Print the variable and its type again
// What type should we expect?
console.log(typeof Newval);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?

// console.log(variablethatdoesntexist);

// Print "greeting" again
// Will this line run? //No because it'll error at the line above.
console.log(greeting);