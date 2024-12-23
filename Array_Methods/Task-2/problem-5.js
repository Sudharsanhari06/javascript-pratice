// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.

let b1=[true,false,true,];
let b2=[false,false,true];
let t=[];
for(let i=0;i<b1.length;i++){
   let s=b1[i]&&b2[i];
   t.push(s);
}
console.log(t);


