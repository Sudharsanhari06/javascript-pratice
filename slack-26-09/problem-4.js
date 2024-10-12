/* If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount over 10 days.
Day 1: 5%
Day 2: 7% (5% + 2%)
Day 3: 9% (7% + 2%)
*/

let dis=5;
let a;
let days=10;
for(let i=1;i<=days;i++)
{
        dis+=2;
         a=dis;
}
console.log(a);

