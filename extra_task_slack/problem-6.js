// Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.

function airplane(){
    let totalfeet=1000;
    let intervals=10;
    let airplaneclimb=totalfeet/intervals;
    for(let i=1;i<=intervals;i++){
        let total=i*airplaneclimb;
        console.log("Airplane each interval:"+total)
    }
}
airplane()


