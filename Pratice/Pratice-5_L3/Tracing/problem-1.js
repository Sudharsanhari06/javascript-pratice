let n =5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += i + ' ';
        } else {
            row += '  ';  // Two spaces
        }
    }
console.log(row);
}

4





// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i===1||i===n||j==1||j==n){
//             process.stdout.write(i+" "); 
//         }
//         else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }
