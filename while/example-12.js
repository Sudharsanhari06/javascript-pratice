//Function to Compare Two Numbers
let num1=10;
let num2=12;
function compareNumbers(num1,num2){
    if(num1==num2){
        return "The numbers are equal";

    }
    else if(num1>num2){
        return "The first number is greater";
    }
    else{
        return "The second number is greater";
    }
}
let result=compareNumbers(num1,num2);
console.log(result);