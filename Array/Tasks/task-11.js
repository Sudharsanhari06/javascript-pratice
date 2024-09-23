//   Write a program that reverses an array using the `reverse()` method and prints the reversed array.
let  numbers=[1,2,3,4,5];
console.log("Numbers Array:"+numbers);
let len=numbers.length-1;
for(let i=0;len>=i;len--){
    console.log(numbers[len]);
}