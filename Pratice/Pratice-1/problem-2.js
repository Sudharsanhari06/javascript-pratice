// Add the above code in a function digitSum(num) . It should return the sum of the digits of the number.

function digitsum(num){
    let s=0;
    while(num>0){
        let t=num%10;
        num=num/10;
        sum+=t;
    }
    return sum;
}
let result=digitsum(123);
console.log(result);
