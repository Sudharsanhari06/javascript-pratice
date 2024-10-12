let num = 17;
let isPrime = true;
if (num > 1) {
    for (let i = 2; i <=num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }

    }
    if (isPrime) {
        console.log("prime");
    } 
    else {
        console.log("not prime");
}
} else {
    console.log("not prime");
}
