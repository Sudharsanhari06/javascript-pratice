let num=5;
function isEven(num){
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}
isEven(num);

// problem-2


let teamScore=150;
let targetScore=145;
let oversLeft=0;


function dlMethod(teamScore,targetScore,oversLeft){
    if(teamScore>=targetScore){
        console.log("Team wins by DL method");
    }
    else if(teamScore<targetScore && oversLeft>0){
        console.log("Match to be continued");
    }
    else{
        console.log("Team loses by DL method");
    }
}
dlMethod(teamScore,targetScore,oversLeft);



