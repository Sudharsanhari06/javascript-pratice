function func1(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function func2(a, b) {
    return Math.abs(a * b) / func1(a, b);
}


let a = 15;
let b = 20;
let result = func2(a, b);

console.log("Result: " + result);


