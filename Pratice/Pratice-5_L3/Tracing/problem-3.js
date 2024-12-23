let n = 3;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';  // Add spaces
    }
    for (let j = 1; j <= i; j++) {
        row += i + ' ';  // Add numbers
    }
    console.log(row);
}


for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';  // Add spaces
    }
    for (let j = 1; j <= i; j++) {
        row += i + ' ';  // Add numbers
    }
    console.log(row);
}



