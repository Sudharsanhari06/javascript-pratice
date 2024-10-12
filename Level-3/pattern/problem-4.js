let n=5;
for(let i=n;i>0;i--){
    for(let j=1;j<=n-i;j++){
    process.stdout.write(" ")
    }
    for(let k=1;k<=i;k++){
        process.stdout.write("*");
    }
    console.log();
}