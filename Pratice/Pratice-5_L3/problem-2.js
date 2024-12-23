// let num = 42;
// let isPrime = true;
// if (num > 1) {
//     for (let i = 2; i <=num/2; i++) {//i<=44.5  89%2==
//         if (num % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log("prime");
//     } 
//     else {
//         console.log("not prime");
// }
// } else {
//     console.log("not prime");
// }



let num=97;//48.5
let isPrime=true;
if(num>1){
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log("prime");
    }
    else{
        console.log("not")
    }
}
else{
    console.log("not")
}


