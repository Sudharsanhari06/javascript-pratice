let n=3;
for(let i=1;i<=n;i++){
    let str="";
    for(let k=1;k<=n-i;k++){
        str+=" ";
    }
    for(let j=1;j<=i;j++){
        str+="*";
    }
    console.log(str);
}