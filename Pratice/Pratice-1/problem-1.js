// Given a number of 7 digits, print the sum of the digits of the number.

let num=1234567;
let sum=0;
while(num>0){
     let t=num%10;
     sum+=t
        num=parseInt(num/10);
}
console.log(sum);

