// let n=3;
// let str="";
// for(let i=1;i<=n;i++){
//     str+="*"+" ";
// console.log(str);
// }



// // // reverse pattern
// let d=3;
// for(let i=1;i<=d;i++){
// let s=" ";
//     for(let j=1;j<=d;j++){
//         s+=" "+"*";
//         console.log(s);
//     }
// }
// // console.log(s);


let n=3;
for(let i=1;i<=n;i++){
    var a="";
    for(let j=1;j<=n-i;j++){//j<=2
        a+=" ";
    }

for(let v=1;v<=(i*2)-1;v++){
a+="*";
}
console.log(a);

}