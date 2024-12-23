let n=5;
pattern7(n);

// function pattern1(n){
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//             if(i==1||i==n||j==1||j==n){
//                 process.stdout.write("*");
//             }
//             else{
//                 process.stdout.write(" ");
//             }
//         }
//         console.log();
//     }
// }

// function pattern2(n){
//     for(let i=1;i<=n;i++){
//         for(let s=1;s<=n-i;s++){
//             process.stdout.write(" ");
//         }
//         for(let j=1;j<=i;j++){
//             process.stdout.write(i+" ");
//         }
//         console.log();
//     }
// }

// function pattern3(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=i;j++){
//             str+=j+" ";
//         }
//         console.log(str);
//     }

// }

// function pattern4(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=(n-i)+1;j++){
//             str+=j+" ";
//         }
//         console.log(str)
//     }
// }

// function pattern5(n){
//     for(let i=1;i<=n;i++){
//     let num=1;
//     let str="";
//         for(let j=1;j<=i;j++){
//             str+=num+" ";
//             num=num+1;
//         }
//         console.log(str);
        
//     }

// }


function pattern6(n){//n=4 //diamond full
    for(let i=1;i<=(n*2)-1;i++){
        let str="";
        let ts=i<n?n-i:i-n;
        for(let s=1;s<=ts;s++){
            str+=" ";
        }
        let tj=i<n?i:(n*2)-i;
        for(let j=1;j<=tj;j++){
            str+="*"+" ";
        }
        console.log(str);
    }
}


function pattern7(n){//n=4 // diamond empty
    for(let i=1;i<=(n*2)-1;i++){
        let str="";
        let ts=i<n?n-i:i-n;
        for(let s=1;s<=ts;s++){
            str+=" ";
        }
        let tj=i<n?i:(n*2)-i;
        for(let j=1;j<=tj;j++){
            if(i==1||i==(n*2)-1||j==1||j==tj){
                str+="*"+" ";
            }
            else{
                str+="  ";
            }
        }
        console.log(str);
    }
}

// function pattern8(n){
//  for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=n;j++){
//         str+="*"+" ";
//     }
//     console.log(str);
//  }
// }


// function pattern9(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=i;j++){
//             str+="*"+" ";
//         }
//         console.log(str);
//     }
// }

// function pattern10(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=(n-i)+1;j++){
//             str+="*"+" ";
//         }
//         console.log(str);
//     }
// }

// function pattern11(n){//n=5
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let s=1;s<=n-i;s++){
//             str+="  ";
//         }
//         for(let j=1;j<=i;j++){
//             str+="*"+" ";
//         }
//         console.log(str);
//     }  
// }

// function pattern12(n){//n=5
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let s=1;s<=i-1;s++){
//             str+="  ";
//         }
//         for(let j=1;j<=(n-i)+1;j++){
//             str+="*"+" ";
//         }
//         console.log(str);
//     }
// }

// function pattern13(n){
//     for(let i=1;i<=(n*2)-1;i++){
//         let str="";
//         let tj=i<n?(n-i)+1:(i-n)+1 ;
//         for(let j=1;j<=tj;j++){
//             str+="*"+" ";
//         }
//         console.log(str);
//     }

// }

// function pattern14(n){//n=4
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let s=1;s<=i-1;s++){
//             str+=" ";
//         }
//         for(let j=i;j<=(n-i)+i;j++){
//             str+=j+" ";
//         }
//         console.log(str);
//     }

// }


// function pattern15(n){//n=5
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let s=1;s<=n-i;s++){
//             str+=" ";
//         }
//         for(let j=1;j<=i;j++){
//             str+="*"+" ";
//         }
//         console.log(str);
//     }


// }

// function pattern16(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let s=1;s<=n-i;s++){
//             str+=" ";
//         }
//         for(let j=1;j<=(i*2)-1;j++){
//             if(i==1||i==n||j==1||j==(i*2)-1){
//              str+="*";
//             }
//             else{
//                 str+=" "
//             }
//         }

//         console.log(str);
//     }
// }


function pattern17(n){//reverse the pattern 16
    for(let i=1;i<=n;i++){
        let str="";
        for(let s=1;s<=i-1;s++){
            str+=" ";
        }
        for(let j=1;j<=(n-i)+1;j++){
            if(i==1||i==n||j==1||j==(n-i)+1){
                str+="*"+" ";
            }
            else{
                str+="  ";
            }
        }

        console.log(str);
    }
}




