// let n=5;
// for(let i=n;i>0;i--){
//     for(let j=1;j<=n-i;j++){
//     process.stdout.write(" ")
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("*");
//     }
//     console.log();
// }


let n=5;
for(let row=1;row<=n;row++){
    let str="";
    for(space=1;space<=row-1;space++){
        str+=" ";
    }
    for(let col=1;col<=(n-row)+1;col++)
    {
        str+="*";
    }
    console.log(str);
}