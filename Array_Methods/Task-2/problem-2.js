//  Create an array that holds the principal, rate of interest, and time in years for a loan. Write a program to calculate the simple interest using the formula SI = (P * R * T) / 100 and print the result.
let simpleinterest=[1000,10,2];
let len=simpleinterest.length;
let f=1;
for(let i=0;i<len;i++){
    let e=simpleinterest.pop();
    f=f*e;
}
let si=f/100;
console.log(si);