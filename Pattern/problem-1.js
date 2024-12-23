let n=5;
pattern4(n);
function pattern1(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write("*")
        }
        console.log()
    }

}

function pattern2(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=(n-i)+1;j++){
            process.stdout.write("*")
        }
        console.log()
    }

}

function pattern3(n){
    for(let i=1;i<=n;i++){
        for(let s=1;s<=n-i;s++){
            process.stdout.write(" ")
        }
        for(let j=1;j<=(i*2)-1;j++){
            process.stdout.write("*")
        }

        console.log()
    }

}

function pattern4(n){
for(let i=1;i<=(n*2)-1;i++){
    let maxspace=i>n?i-n: n-i;
    for(let s=1;s<=maxspace;s++){
        process.stdout.write(" ");
    }
    let maxcol=i>n?((n * 2 - i) * 2 )- 1:i*2-1;
    for(let j=1;j<=maxcol;j++){
        process.stdout.write("*")
    }
    console.log();
}
}

function pattern5(n){
    
    for(let i=1;i<=n;i++){
        let str="";
        for(let s=1;s<=n-i;s++){
            str+=" ";
        }
        for(let j=1;j<=i;j++){
            if(j==1||j==i){
                str+="1"+" ";
            }
           else if(i==3){
            str+="2"+" ";
           }
           else if(i==4){
            str+="3"+" ";
           }
           else if(j==2||j==4){
            str+="4"+" ";
           }
           else{
            str+="6"+" ";
           }




        }
        console.log(str);
    }
}

function pattern6(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let s=1;s<=n-i;s++){
            str+=" ";
        }
        for(let j=1;j<=i;j++){
            if(j==1||j==i){
                str+="*"+" ";
            }
            else{
                str+="  ";
            }
        }
console.log(str);
    }


    for(let i=1;i<n;i++){
        let str="";
        for(let s=1;s<=i;s++){
            str+=" ";
        }
        for(let j=1;j<=n-i;j++){
            if(j==1||j==n-i){
                str+="*"+" ";
            }
            else{
                str+="  ";
            }
        }
console.log(str);
    }



}












