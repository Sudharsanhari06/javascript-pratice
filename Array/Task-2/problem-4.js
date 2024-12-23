// Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.

let populations = [50, 60, 70, 80, 90];
let a=populations.length;
let sum=0;
for(let i=0;i<a;i++){
    sum=sum+populations[i];
}
console.log("Sum of Numbers:"+sum)
let avg=sum/a;
console.log("Average of Numbers:"+avg);

