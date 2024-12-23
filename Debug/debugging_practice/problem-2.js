let n=5;
function  calculateFactorial(n){
    let i=1;
    let fact=1;
    while(i<=n){
        fact=i*fact;//6//24
        i++;
    }
    console.log(fact);
}
calculateFactorial(n);