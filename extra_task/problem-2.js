// A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.


let batteryFull = 100;
let below = 20;
function battery() {

    while (batteryFull > below) {
        console.log(`Decreasing the battery level: ${batteryFull}`);
        batteryFull = batteryFull-5;
    }
    console.log(`Battery is low: ${batteryFull}`);
}
battery();