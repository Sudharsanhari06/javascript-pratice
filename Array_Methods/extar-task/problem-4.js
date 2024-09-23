// Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.

let decimal=[10,20,30];
for(let i=0;i<decimal.length;i++){
    let t=decimal[i].toString(2);
    console.log(t);
}


// binary to decimal
let b=1111;
let d=parseInt(b,2)
console.log(d);


