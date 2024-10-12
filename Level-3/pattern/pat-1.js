let n=5;
for(let row=1;row<=n;row++)
{
for(let space=1;space<=row-1;space++){
    process.stdout.write(" ");
}
// for(let col=1;col<=n-row+1;col++){
//     process.stdout.write("*");
// }
for(let col=n-row+1;col>0;col--){
    process.stdout.write("*");
}
console.log();
}