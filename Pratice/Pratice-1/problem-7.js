//Print the sum of all even numbers between a and b. if a = 5, and b = 10 then it should print 24
let num1=5;
let num2=10;
let sum=0;     
for(let i=num1;i<=num2;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum)