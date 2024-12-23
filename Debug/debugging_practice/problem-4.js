let n=10;//declare the variable 
function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i<=n) {//add equal operator
      sum += i;
      i++;
    }
    return sum;
  }
  let result=sumNumbers(n);
  console.log(result)