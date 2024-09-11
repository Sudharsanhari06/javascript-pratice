// sum of odd numbers from 1 to 100 

let n=100;
function oddNumbers(n){
    let sum=0;
    for(let i=1;i<=100;i++){
        if(i%2!=0){
            sum=sum+i;
        }
    }
    console.log(sum)

}
oddNumbers(n)