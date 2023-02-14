// create an Array using an Array literal

// let arr1 = ["Peach","Oranges","Lemon"];
let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = [];
// access the 1st item in the Array
arr1[0];
// access the last item in the Array
arr1[arr1.length-1];
// print the length of the Array
console.log(arr1.length);
// use the length property to access the last item in the Array
arr1[arr1.length-1];
// with for...of, loop over the Array, modify the value and add to a different Array

// let beep = 0;
// for (let x of arr1){
//   beep++;
//   x += beep;
//   arr2.push(x);
// };

// for (let x of arr1){
//     if (arr1[x] === 3){
//         console.log("arr1; ",arr1[x]);
//     } //test 1
// }


for (let x of arr1){
    if (x === 4){
        console.log("arr1; ",arr1[x]);
    }
}