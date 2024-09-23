// print the middle number;
let num=12345;
let s=[];
while(num>0){
    let t=num%10;
    num=parseInt(num/10);
    s.unshift(t);
}
let b=s.length;
let d=Math.round(b/2);
let mi=d-1
console.log(s[mi]);
