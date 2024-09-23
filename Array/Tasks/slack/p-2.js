// You are given an array of student grades. Write a function that calculates the average grade

let grades=[10,20,30,20,20];
console.log("School grades",grades);
let sum=0;
for(let i=0;i<grades.length;i++){
    sum+=grades[i];
}
let avg=sum/grades.length;
console.log("Average:"+avg);