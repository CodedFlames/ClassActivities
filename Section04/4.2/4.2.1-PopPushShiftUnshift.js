const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const first = nums.pop();
const second = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
const shift1 = nums.shift();
const shift2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(first,second);
nums.push(shift2,shift1);

console.log(nums);