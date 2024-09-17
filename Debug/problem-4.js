function generateSeries(n) {
    let str = "";
    for (let i=1; i<=n; i++) {
        let term = i**2; 
        str =str+term+" ";
    }
    return str;

}
let result=generateSeries(5)
console.log(result);