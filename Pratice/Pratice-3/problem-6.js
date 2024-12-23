// print the number 15 to 29 print the 6 multiplay only print.

function sixmultiplay(num1,num2){
    for(let i=num1;i<=num2;i++){
        if(i%6==0){
            console.log(i);
        }
    }
}
sixmultiplay(15,29);