let n=3;
for(let i=1;i<=n+2;i++){
    let ts= i>n?i-n:n-i;
    for(let s=1;s<=ts;s++){
        process.stdout.write(" ");
    }
    let tj= i>n?(n*2)-i:i;
    for(let j=1;j<=tj;j++){
        process.stdout.write(i+" ");

    }
    console.log();
}