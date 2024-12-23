// Given a year in the variable exampleYear, write a program to check whether it is a leap year or not.
// Print "Y" if it's a leap year and "N" if it's a common year.
// Sample Input :
// 2020

let year=2020;
if(year%4==0 || year%400==0 ){
    console.log("leap year");
}
else{
    console.log("not year");
}