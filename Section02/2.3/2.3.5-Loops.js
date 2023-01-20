// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let num = 0;
// 2) create a variable to represent the current total
let total = 0;
// 3) write a while loop that sums the numbers from 1 to 100
let i = 0;

let Scan = (X)=>{return console.log(X)};

while (i < 100){
    i++;
    total = total+i+i;
    Scan("WHILE SUM; "+total);
}

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100
let NT = 0;
for (let Y = 0; Y < 100; Y++){
NT++;
Scan("FOR TOTAL; "+NT);
};
// 1) write a for loop that sums the numbers from 1 to 100
let TN = 0;
for (let M = 0; M < 100; M++){
    TN = TN+M+M;
    Scan("FOR SUMMARY; "+TN);
}