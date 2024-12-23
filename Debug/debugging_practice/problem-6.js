let n=5;
function sumNumbers(n){
    let i=1;
    let sum=0;
    while(i<=n){
        sum=i+sum;
        i++;
    }
    return sum;

}
let result=sumNumbers(n);
console.log(result);
