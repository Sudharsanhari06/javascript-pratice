// Given a string "Freshworks, Global Infocity, Perungudi, Chennai - 600096", print the address on 4 different lines.

let office="Freshworks,Global Infocity,Perungudi,Chennai - 600096";
let n=office.split(",");
let len=n.length;
for(let i=0;i<len;i++){
    console.log(n[i])
}
