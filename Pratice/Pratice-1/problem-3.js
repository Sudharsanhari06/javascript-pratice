// Given an array of names of people, add the length of the array as the first element in the array.

let people=["people1","people2","people3","people4"];
let len=people.length;
let s=0;
for(i=0;i<=len;i++){
    s+=i
}
console.log(s);