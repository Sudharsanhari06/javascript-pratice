// Given three numbers a, b, c print the maximum number amongst the three.
//a =10, b = 30, c = 5

let a =10;
let b=30;
let c=5;
if(a>b && a>c){
    console.log("The largest number:"+a);
}
else if(b>a && b>c){
    console.log("The largest number:"+b);
}
else{
    console.log("The largest number:"+c);

}





/*
3.Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
if n = 4, print the first 4 odd numbers 1 3 5 7  */



let term=7;
for(let i=1;i<=term*2;i++){
    if(i%2!=0){
        console.log(i);
    }

}











