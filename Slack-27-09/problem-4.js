// Given an array of float find the average of the numbers.

let numDecimal=[35.5,40,76.3,68.5];
let len=numDecimal.length;
let s=0;
for(let i=0;i<len;i++){
    s+=numDecimal[i];
}
let avg=s/len;
console.log("the average:"+avg);