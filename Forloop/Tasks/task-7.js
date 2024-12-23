// fibonacci series
let n1=0;
let n2=1;
let term=5;
for(let i=1;i<=term;i++){
    console.log(n1);
    let result=n1+n2;
    n1=n2;
    n2=result;
}