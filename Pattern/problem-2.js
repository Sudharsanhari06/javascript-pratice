const n = 5;
pattern9(n);

function pattern1(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function pattern2(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function pattern3(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= (n - row) + 1; col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function pattern4(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write(col.toString());
        }
        console.log();
    }
}

function pattern5(n) {
    for (let row = 1; row <= (n * 2) - 1; row++) {
        let totalcol = row <= n ? row : (n * 2) - row;
        for (let col = 1; col <= totalcol; col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}
function pattern6(n) {
    for (let row = 1; row <= n; row++) {
        for (let space = 1; space <= (n - row); space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= row; col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function pattern7(n) {
    for (let row = 1; row <= n; row++) {
        for (let space = 1; space <= row - 1; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= (n - row) + 1; col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function pattern8(n) {
    for (let row = 1; row <= n; row++) {
        for (let space = 1; space <= n - row; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= (row * 2) - 1; col++) {
            process.stdout.write("*");
        }
        console.log();
    }

}
function pattern9(n) {
    for (let row = 1; row <= n; row++) {
        for (space = 1; space <= row - 1; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= ((n * 2) - row)- (row - 1); col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function pattern10(n) {
    for (let row = 1; row <= n; row++) {
        for (let space = 1; space <= n - row; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= row; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

function pattern11(n) {
    for (let row = 1; row <= n; row++) {
        for (let space = 1; space <= row - 1; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= (n - row) + 1; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

function pattern12(n) {
    for (let row = 1; row <= n * 2; row++) {
        let totalspace = row <= n ? row - 1 : (n * 2) - row;
        for (let space = 1; space <= totalspace; space++) {
            process.stdout.write(" ");
        }
        let totalcol = row <= n ? (n - row) + 1 : row - n;
        for (let col = 1; col <= totalcol; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

function pattern13(n) {
    for (let row = 1; row <= n; row++) {
        for (let space = 1; space <= n - row; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= (row * 2) - 1; col++) {
            if( row==n||col==1||col==(row * 2) - 1){
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");
            }
        }
        console.log();
    }

}


function pattern14(n){
    for(let row=1;row<=n;row++){
     for(let space=1;space<=row-1;space++){
        process.stdout.write(" ");
     }   
     for(let col=1;col<=(n*2)-row-(row-1);col++){
        if(row==1||col==1||col==(n*2)-row-(row-1)){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
     }
      console.log()  
    }
  
}


// function pattern15(n){
//     for(let row=1;row<=(n*2)-1;row++){
//         let totalspace=row<=n?n-row:row-n;
//         let totalcol=row<=n?row:(n*2)-row;
//         for(let space=1;space<=totalspace;space++){
//             process.stdout.write(" ");
//         }
//         for( let col=1;col<=totalcol;col++){
            
//                 process.stdout.write("* ");
//         }
//         console.log();
//     }
// }


// function pattern15(n) {
//     for (let row = 1; row <= (n * 2) - 1; row++) {
//         let totalSpace = row <= n ? n - row : row - n;
//         let totalCol = row <= n ? row : (n * 2) - row;

//         // Print spaces
//         for (let space = 1; space <= totalSpace; space++) {
//             process.stdout.write(" ");
//         }

//         // Print stars and spaces between them
//         for (let col = 1; col <= totalCol; col++) {
//             if (col === 1 || col === totalCol) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
    
//             if (col < totalCol) {
//                 process.stdout.write(" ");
//             }
//         }
//         console.log();
//     }
// }

function pattern20(n) {
    for (let row = 1; row <= n; row++) {

        for (let col = 1; col <= n; col++) {
            if (row == 1 || row == n || col == 1 ||col==n) {
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");

            }
        }


        console.log();
    }
}

function pattern28(n){
    for(let row=1;row<=(n*2)-1;row++){
        let totalspace=row<=n?n-row:row-n;
        for(let space=1;space<=totalspace;space++){
            process.stdout.write(" ");
        }
        let totalcol=row<=n?row:(n*2)-row;
        for( let col=1;col<=totalcol;col++){
            process.stdout.write("* ")
        }
        console.log();
    }
}





