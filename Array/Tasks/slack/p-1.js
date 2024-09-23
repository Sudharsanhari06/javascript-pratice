//19/09/24  You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

let expense=[10,20,30,40];
console.log("Expenses of week:",expense);
console.log(typeof(expense));
let sum=0;
for(let i=0;i<expense.length;i++){
    sum+=expense[i];
}
console.log("Total Exenses:"+sum);


