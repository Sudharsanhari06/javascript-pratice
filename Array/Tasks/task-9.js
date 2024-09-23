// Create an array of 10 numbers. Write a program to filter out only the odd numbers and print them.

let oddEven=[10,9,20,11,15,18,21];
console.log("Numbers Array"+oddEven);
for(let i=0;i<oddEven.length;i++){
    if(oddEven[i]%2==1){
        console.log(oddEven[i]);
    }
}