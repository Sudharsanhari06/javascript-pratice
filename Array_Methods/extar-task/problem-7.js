// Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.
let set1=[1,2,3,4,5];
let set2=[1,2,3,4,5,6,7,8];
let t=[...new Set([...set1,...set2])];
console.log(t);


