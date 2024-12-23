/*Complete the program printAllMultiplesOf5Bet(a, b)
eg, printAllMultiplesOf5Bet(10, 30) in reverse
30
25
20
15
10*/
function multiplay(a,b){
    for(let i=b;i>=a;i--){
        if(i%5==0){
            console.log(i);
        }
    }
}
multiplay(10,30);





