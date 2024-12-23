let num=121;
let a="";
let t=num.toString();
let i=t.length-1;
while(i>=0){
    a+=t[i];
    i--;
}
if(num==a){
    console.log(num+"palindrom");
}
else{
    console.log("not palindrom")

}