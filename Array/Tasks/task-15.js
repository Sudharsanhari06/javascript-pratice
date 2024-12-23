// You have an array of people ages. Write a function that filters out people who are 18 years old or older.

let ages=[18,20,30,15,17];
let n=[];
for(let i=0;i<ages.length;i++){
    if(ages[i]>=18){
        n+=ages[i]+",";
    }
}
console.log(n);
