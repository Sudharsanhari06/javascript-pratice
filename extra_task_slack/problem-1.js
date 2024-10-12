//Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.

let totalLap=10;
function lap(){
    let i=1;
    while (i<=totalLap){
        console.log(`Robot completed lap ${i}`);
        i++;
    }
}
lap();
