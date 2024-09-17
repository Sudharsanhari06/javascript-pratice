// sum of n numbers

function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i<=n) {//add equal sign
      sum += i;
      i++;

    }
    return sum;

  }

let result=sumNumbers(5);//make variable call function
console.log(result);
