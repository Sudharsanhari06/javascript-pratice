let n1 = 18;
let n2 = 16;
let min= n1>n2 ? n1:n2;
for (let i = 2; i <= min; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
        console.log(i);
    }
}

