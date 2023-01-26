// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function BEEP(One = 1, Two = 2, ...TOOMUCH) {
  for (let i = 0; i < TOOMUCH.length; i++) {
    console.log(`Overflow; ${TOOMUCH[i]}`);
  }
  return console.log(One + Two);
}
// invoke the function and pass in two numbers
BEEP(1, 2);
// invoke the function and pass in more than two numbers
BEEP(3, 2, 1);
// invoke the function and pass in only one number
BEEP(1);
// change the function to set default values for the parameters
//DONE.
// again, invoke the function and pass in only one number
BEEP(1);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
BEEP(1, 2, "WOAH NELLY", "THATS A BIT MUCH...");
// again, invoke the function and pass in more than two numbers
BEEP(3, 3, 3);
