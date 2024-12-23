//    Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.
let oldItem=[10,20,30,20];
let newItem=[30,40,50,60];
let s=[];
for(let i=0;i<oldItem.length;i++){
    let t=newItem[i]-oldItem[i];
    let p=(t/newItem[i])*100;
    s.push(p);
}
console.log(s);


