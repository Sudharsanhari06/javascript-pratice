// let n=5;
// for(let i=1;i<=n;i++){
// let str="";

//     for(let j=1;j<=i;j++){
//         str+="*";
//     }
//     console.log(str);
// }



// reverse pattern

let n=5;
for(let i=0;i<n;i++){
    let str="";
    for(let j=1;j<=n-i;j++){//j<=n-i
        str+="*";
    }
    console.log(str);
}