let age = 13;

// Write an If Else statement
if(age >= 25){
    console.log("Renting a car is more affordable.");
}else if (age < 25){
console.log("Renting a car is very expensive.");
}
// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25
// console.log "Renting a car is very expensive."


// Chaining if statements: if - else if - ... - else

// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25 but greater than or equal to 18
// console.log "Renting a car is very expensive."
// if age is less than 18
// console.log "You cannot legally rent a car."

if (age >= 25){
    console.log("Renting a car is more affordable.");
}else if (age < 25 && age >= 18){
    console.log("Renting a car is very expensive.");
}else if(age < 18){
    console.log("You cannot legally rent a car.");
}

// switch(age){
//     case 25:
//         console.log("Renting a car is MORE AFFORDABLE.");
//         break;
//     case 25:
//     case 18:
//         console.log("Renting a car is VERY EXPENSIVE.");
//         break;
//     case 13:
//         console.log("YOU CANNNOTT LEGALLY DRIVE LOSER.");
//         break;
// }