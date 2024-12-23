function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i<Math.sqrt(num); i++) {
        if (num % i === 0) { 
            return false;
        }
    }
    return true;
}
// Example usage
let num = 37;
console.log(isPrime(num));