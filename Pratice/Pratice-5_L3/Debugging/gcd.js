 function gcd(a, b) {
     while (b !== 0) {
         let temp = b;
         b = a % b; 
         a = temp;  
     }
     return a;
 }

// Example usage
let a = 48, b = 18;
console.log(gcd(a,b));







// let min=a<b?a:b;
// for(let i=2;i<=min;i++){
//     if(a%i==0&&b%i==0){
//         gcd=i;
//     }
// }
// console.log(gcd);



