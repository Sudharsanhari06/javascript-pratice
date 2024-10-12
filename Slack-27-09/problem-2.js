// Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array which are between a and b
let a=10;
let b=20;
let array=[10,13,19,22];
let s=0;
for(let i=0;i<array.length;i++){
    if(array[i]>=a && array[i]<=b){
        s+=1
    }
}
console.log(s);