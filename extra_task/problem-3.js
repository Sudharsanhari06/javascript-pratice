// A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.


function fourDirection(direction){
    
    switch(direction){
        case "north":
            console.log("The robot north direction");
            break;
        case "south":
            console.log("The robot south direction");
            break;
        case "east":
            console.log("The robot east direction");
            break;
        case "west":
            console.log("The robot west direction");
            break;
        default:
            console.log("wrong direction");
            break;
        
    }
}
fourDirection("southh");